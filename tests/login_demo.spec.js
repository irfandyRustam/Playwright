import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async ({page}) => {

  await page.goto('https://demo.applitools.com/');
  // await page.pause();

  await page.locator("//input[@id='username']").fill('Admin');
  await page.locator("//input[@id='password']").fill('admin123');
  await page.waitForSelector("//a[@id='log-in']", {timeout: 5000});
  await page.locator("//a[@id='log-in']").click();

})

test('Demo Login Test 2', async ({page}) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.pause();

  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("button[type='submit']").click();

})

test.only('Demo Login Test 3', async ({page}) => {

  await page.goto('https://admin-demo.nopcommerce.com/');
  // await page.pause();

  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').dblclick();
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL('https://admin-demo.nopcommerce.com/admin/');
  await page.locator('div:has-text("Dashboard")').nth(3).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.close();

})