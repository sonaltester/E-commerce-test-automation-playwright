const  { test , expect} = require('@playwright/test');

test('Sauce login page', async ({page}) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.waitForTimeout(2000);
  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(2000);
  await page.getByRole('button',{ name: 'Login'}).click();
  await page.waitForTimeout(2000);

  console.log(page.url());

  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.waitForTimeout(2000);

  await page.locator('.shopping_cart_link').click();
  await page.waitForTimeout(2000);

  await page.locator('.btn.btn_action.btn_medium.checkout_button').click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('First Name').fill('sonal');
  await page.getByPlaceholder('Last Name').fill('Dhobi');
  await page.getByPlaceholder('Zip/Postal Code').fill('380051');
  await page.waitForTimeout(2000);
  await page.locator('#continue').click();
  await page.waitForTimeout(2000);

  await page.locator('[data-test="finish"]').click();
  await page.waitForTimeout(2000);
  await page.locator('[name="generate-pdf-order"]').click();
  await page.waitForTimeout(3000);

  await page.locator("#react-burger-menu-btn").click();
  await page.waitForTimeout(2000);
  await page.locator("#logout_sidebar_link").click();
  await page.waitForTimeout(2000);

})

