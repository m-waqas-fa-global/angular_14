const puppeteer = require('puppeteer');

async function customScripts() {
  //==================== Taking ScreenShort Script: ======================
  const browser = await puppeteer.launch({
    headless: false,
  });
  // Load new Browser Tab for Chrome
  const page = await browser.newPage();
  // set page viewport:
  await page.setViewport({
    width: 1200,   // 👈 your desired width
    height: 800
  })

  // Type and load this URL: 
  await page.goto("https://www.roadmap.sh", {
    waitUntil: "networkidle2"
  })
  // wait for a specific element (best practice)
  await page.waitForSelector('body');
  // Take Screen If Page is loaded Successfully!
  await page.screenshot({
    path: `screenshot-${Math.floor(Math.random() * 30000)}.png`,
    fullPage: true,
  });

  //================================ Generating PDF: ============================== 
  // await page.setViewport({
  //   width: 1200,   // 👈 your desired width
  //   height: 800
  // })
  await page.goto("https://npmjs.com", {
    waitUntil: "domcontentloaded"
  })
  // wait for a specific element (best practice)
  await page.waitForSelector('body');
  // Generating PDF:
  await page.pdf({
    path: `pdf-${Math.floor(Math.random() * 30000)}.pdf`,
    printBackground: true
  })   
  // Close the browser after work comple
  await browser.close();
}

module.exports = customScripts;