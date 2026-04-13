import puppeteer from 'puppeteer';

(async () => {
  console.log('Starting browser to generate PDF...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to the local server
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 60000 });

  // Set viewport to a good desktop size
  await page.setViewport({ width: 1440, height: 1080 });

  console.log('Scrolling through the page to trigger animations and load photos...');
  // Auto-scroll to load all images and trigger Framer Motion animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 300;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100); 
    });
  });
  
  console.log('Waiting for everything to settle...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Generating PDF...');
  // Generate a standard paginated PDF
  await page.pdf({
    path: 'ChaptersOfUs_Preview.pdf',
    printBackground: true,
    format: 'A4',
    timeout: 60000
  });

  await browser.close();
  console.log('✅ PDF successfully generated: ChaptersOfUs_Preview.pdf');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
