const delay = require('../utils/delay');
const location = require("../queries/location");

async function isCloudflareVerificationPage(page) {
    const bodyText = await page.evaluate(() => (document.body?.innerText || '').toLowerCase());
    const url = page.url().toLowerCase();

    return (
        bodyText.includes('additional verification required') ||
        bodyText.includes('verify you are human') ||
        bodyText.includes('ray id') ||
        url.includes('/cdn-cgi/')
    );
}

async function waitForVerificationToComplete(page, timeoutMs = 180000) {
    const startedAt = Date.now();

    while (Date.now() - startedAt < timeoutMs) {
        if (!(await isCloudflareVerificationPage(page))) {
            return true;
        }
        await delay(2000);
    }

    return false;
}

async function searchIndeed(page, query) {
    console.log(`Searching for: ${query}`);
    const matchTitle = [
        'Full Stack Developer',
        'Developer',
        'Software Engineer',
        'Backend Engineer',
        'Senior',
        'Web Engineer',
        'Web Developer',
        'Node.js Developer',
        'Backend',
        'APIs',
        'Development'
    ];

    // Build query URL directly because Indeed's home page selectors vary by region/cookie state.
    const searchUrl = `https://www.indeed.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    if (await isCloudflareVerificationPage(page)) {
        console.log('Cloudflare verification detected. Complete "Verify you are human" in the opened Chrome window...');
        const cleared = await waitForVerificationToComplete(page);
        if (!cleared) {
            throw new Error('Cloudflare verification did not clear within 3 minutes. Retry after manual verification.');
        }
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
    }

    // Wait for job rows (Indeed markup can vary by region/experiment).
    await page.waitForSelector('a[data-jk], a[href*="jk="], .job_seen_beacon, [data-jk]', { timeout: 20000 });
    await delay(1500);

    // Extract job results
    const jobs = await page.evaluate(() => {
        const employmentTypePatterns = [
            /full[-\s]?time/i,
            /part[-\s]?time/i,
            /contract/i,
            /temporary/i,
            /internship/i,
            /commission/i,
            /freelance/i,
            /seasonal/i
        ];

        const normalizeEmploymentType = (value) => {
            if (!value) return null;
            const cleaned = value.toLowerCase().replace(/\s+/g, ' ').trim();
            if (cleaned.includes('full')) return 'Full-time';
            if (cleaned.includes('part')) return 'Part-time';
            if (cleaned.includes('contract')) return 'Contract';
            if (cleaned.includes('temporary')) return 'Temporary';
            if (cleaned.includes('intern')) return 'Internship';
            if (cleaned.includes('commission')) return 'Commission';
            if (cleaned.includes('freelance')) return 'Freelance';
            if (cleaned.includes('seasonal')) return 'Seasonal';
            return value.trim();
        };

        const anchors = Array.from(document.querySelectorAll('a[data-jk], a[href*="jk="], h2 a'));
        const uniqueByKey = new Map();

        for (const anchor of anchors) {
            const href = anchor.getAttribute('href') || '';
            const dataJk =
                anchor.getAttribute('data-jk') ||
                anchor.closest('[data-jk]')?.getAttribute('data-jk') ||
                '';
            const hrefMatch = href.match(/[?&]jk=([^&]+)/i);
            const fallbackKey = href || anchor.textContent?.trim() || '';
            const jobKey = dataJk || (hrefMatch ? hrefMatch[1] : fallbackKey);
            if (!jobKey || uniqueByKey.has(jobKey)) {
                continue;
            }

            const card =
                anchor.closest('div.job_seen_beacon') ||
                anchor.closest('div.slider_item') ||
                anchor.closest('li') ||
                anchor.closest('article') ||
                anchor.parentElement;

            const title =
                card?.querySelector('[data-testid="jobTitle"] span[title], [data-testid="jobTitle"], h2 a span[title], h2 span, h2 a')?.textContent?.trim() ||
                anchor.textContent?.trim() ||
                null;

            const company =
                card?.querySelector('[data-testid="company-name"], .companyName')?.textContent?.trim() || null;

            // const location =
            //     card?.querySelector('[data-testid="job-location"], .companyLocation')?.textContent?.trim() || null;

            const cardText = card?.innerText || '';
            const matchedEmploymentType = employmentTypePatterns
                .map((pattern) => cardText.match(pattern)?.[0] || null)
                .find(Boolean);
            const employmentType = normalizeEmploymentType(matchedEmploymentType);

            const absoluteHref = href.startsWith('http')
                ? href
                : href
                    ? new URL(href, 'https://www.indeed.com').href
                    : null;

            uniqueByKey.set(jobKey, {
                title,
                company,
                // location,
                employmentType,
                link: hrefMatch?.[1]
                    ? `https://www.indeed.com/viewjob?jk=${encodeURIComponent(hrefMatch[1])}`
                    : absoluteHref
            });
        }

        return Array.from(uniqueByKey.values());
    }).then((items) =>
        items
            .filter((job) => job.title && job.link)
            .filter((job) => {
                const title = job.title.toLowerCase();
                return matchTitle.some((keyword) => title.includes(keyword.toLowerCase()));
            })
    );

    return jobs;
}

module.exports = searchIndeed;