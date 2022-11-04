import {test, expect} from '@playwright/test'

test('Assertions Demo', async ({page}) => {

    await page.goto("https://kitchen.applitools.com/");
    // await page.pause();

    // Assertions
    // Check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    if(await page.$('text=The Kitchen')){
      await page.locator('text=The Kitchen').click();
    }
    
    // Check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

    // Check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

    // Check text matches value or not
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    // await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen');

    // Check element attribute
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    // Check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);

    // Visual validation with screenshot
    // await page.pause();
    await expect(page).toHaveScreenshot();

})