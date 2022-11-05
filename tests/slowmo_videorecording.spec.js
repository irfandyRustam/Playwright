import {test, expect, chromium} from '@playwright/test'

test('Slow motion and video recording', async () => {

  const browser = await chromium.launch({
    slowMo: 1000,
    headless: false
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: {width: 800, height: 600}
    }
  });

  const page = await context.newPage();
  await page.goto('https://admin-demo.nopcommerce.com/');
  // await page.pause();

  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').dblclick();
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

  await context.close();

})