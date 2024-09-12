import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('开始前往网站....');
  await page.goto('https://webkubor.github.io/resume', { waitUntil: 'networkidle0' });
  await page.emulateMediaType('screen');  // 更新为 `emulateMediaType`
  console.log('获取成功,正在导出PDF....');
  await page.pdf({
    path: 'public/resume.pdf',
    printBackground: true,
    format: 'A4',
    scale: 0.8,
    margin: {
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px'
    }
  }); // create a PDF
  await browser.close();
})();
