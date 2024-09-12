import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 }); // PC端
  console.log('开始前往网站....')
  await page.goto('https://webkubor.github.io/resume',  {
    timeout: 0 //传0则为无限等待，直到加载渲染完毕
  });
  console.log('网站渲染完毕....')
  // 截屏整个视图
  await page.screenshot({ path: 'public/screenshot.png' ,fullPage: true, omitBackground:false});
  console.log('网站截图保存完毕....')
  await browser.close();
})();