const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../support/pages/loginPage');
test('Deve fazer login com sucesso com credenciais válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  expect(await page.url()).toContain('inventory');
});
