const express = require("express");
const app = express();
const admin = express();
const cron = require("node-cron");
// ================== Puppeteer Setup =================
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const searchIndeed = require('./scraper/indeed');
const resolveChromeExecutablePath = require('./utils/chromeexcutionpath');
const homePageDesign = require("./templates/homepage");
const queries = require("./queries/search-keywords");
const customScripts  = require("./scraper/custom-scrippt.automation");
// Group Path Prefixes in Express.js:
app.use('/admin', admin);

const port = 4321;
let isCustomScriptRunning = false;
// =========== Creating File Name: ================
function getExportFileName() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const randomId = Math.floor(1000 + Math.random() * 900000);
  return `${day}-${month}-${year}_${randomId}.json`;
}
// =========== Save Automation Result into the Jobs Folder: =======
function saveResultsToJobsFolder(data) {
  const jobsDir = path.join(__dirname, 'jobs');
  if (!fs.existsSync(jobsDir)) {
    fs.mkdirSync(jobsDir, { recursive: true });
  }

  const fileName = getExportFileName();
  const filePath = path.join(jobsDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

async function startExecuteScript() {
  const chromePath = resolveChromeExecutablePath();
  const userDataDir = path.join(__dirname, '.chrome-profile');

  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: false, // set true for production
    defaultViewport: null,
    userDataDir,
    ignoreDefaultArgs: ['--enable-automation'],
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled'
    ],
    ...(chromePath ? { executablePath: chromePath } : { channel: 'chrome' })
  });

  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined
    });
  });
  let allQueryResults = []
  for (const query of queries) {
    const results = await searchIndeed(page, query);

    allQueryResults.push({
      result_for: query,
      result: results
    });
    // console.log(`\nResults for: ${query}`);
    // console.log(results); // show top 5
  }
  saveResultsToJobsFolder(allQueryResults);
  // await browser.close();
}
// startExecuteScript()

cron.schedule('40 2 1 4 *', async () => {
  // console.log(`CRON Job is Running!`);
  console.log(`CRON Job is running at 2:40 AM on Wednesday, April 1, 2026.`);
  // await startExecuteScript();
});

app.get("/", (req, res) => {
  res.send(homePageDesign);
  app.locals.title
})

app.post("/run-custom-script", async (req, res) => {
  if (isCustomScriptRunning) {
    return res.status(409).json({
      ok: false,
      message: "customScripts() is already running. Please wait."
    });
  }

  try {
    isCustomScriptRunning = true;
    await customScripts();
    return res.json({
      ok: true,
      message: "customScripts() completed successfully."
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "customScripts() failed.",
      error: error.message
    });
  } finally {
    isCustomScriptRunning = false;
  }
});

admin.get("/usersList", (req, res) => {
  res.send({ res: "Admin Path Mounted", roleId: 5 })
})

app.listen(port, () => {
  console.log(`Express Server List Localhost:${port}`)
});