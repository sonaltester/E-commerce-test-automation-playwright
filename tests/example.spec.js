
const { test, expect } = require('@playwright/test');

test('SauceDemo End-to-End Testing', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');
  await expect(page.locator('#user-name')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#login-button')).toBeEnabled();

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.inventory_list')).toBeVisible();

  await page.screenshot({ path: 'screenshot/login-success.png' });

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.screenshot({ path: 'screenshot/product-added.png' });

  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.cart_item')).toHaveCount(1);

  await page.screenshot({ path: 'screenshot/cart.png' });

  await page.locator('#checkout').click();

  await expect(page).toHaveURL(/checkout-step-one.html/);

  await page.locator('#first-name').fill('Sonal');
  await page.locator('#last-name').fill('Dhobi');
  await page.locator('#postal-code').fill('380051');

  await page.screenshot({ path: 'screenshot/checkout-info.png' });

  await page.locator('#continue').click();

  await expect(page).toHaveURL(/checkout-step-two.html/);
  await expect(page.locator('.cart_item')).toHaveCount(1);
  await expect(page.locator('.summary_total_label')).toBeVisible();

  await page.locator('#finish').click();

  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await expect(page.locator('.complete-text')).toBeVisible();

  await page.screenshot({ path: 'screenshot/order-complete.png' });

  await page.locator('#react-burger-menu-btn').click();

  await expect(page.locator('#logout_sidebar_link')).toBeVisible();

  await page.screenshot({ path: 'screenshot/logout-menu.png' });

  await page.locator('#logout_sidebar_link').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong_password');
  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

  await page.screenshot({ path: 'screenshot/invalid-login.png' });
});
