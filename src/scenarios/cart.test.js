// src/scenarios/cart.test.js
const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../support/pages/productsPage');  // Caminho correto

test('Deve adicionar um produto ao carrinho', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  
  // Navegar para a página de produtos
  await productsPage.navigate();  // Isso deve funcionar se o método navigate estiver implementado corretamente
  
  // Adicionar um produto ao carrinho
  await productsPage.addToCart();
  
  // Ir para a página do carrinho
  await productsPage.goToCart();
  
  // Verificar o título do produto no carrinho
  const productTitle = await productsPage.getProductTitle();
  expect(productTitle).toBe('Sauce Labs Backpack');
});
