const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../support/pages/checkoutPage');

test('Deve finalizar a compra com sucesso', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.enterShippingInfo('John', 'Doe', '12345');
  await checkoutPage.finishCheckout();
  const message = await checkoutPage.getCheckoutCompleteMessage();
  expect(message).toBe('THANK YOU FOR YOUR ORDER');
});
