import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('开始前往网站....');
  await page.goto('http://localhost:5173/resume/', { waitUntil: 'domcontentloaded' });
  await page.emulateMediaType('screen');  // 更新为 `emulateMediaType`
  console.log('获取成功,正在导出PDF....');
  await page.pdf({
    path: 'dist/resume.pdf',
    printBackground: true,
    format: 'A4',
    scale: 0.7,
    margin: {
      top: '20px',
      left: '20px',
      bottom: '20px',
      right: '20px'
    }
  }); // create a PDF
  await browser.close();
})();
