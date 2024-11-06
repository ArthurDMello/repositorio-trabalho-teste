// src/support/pages/productsPage.js
class ProductsPage {
    constructor(page) {
      this.page = page;
      this.productTitleSelector = '.product_title'; // Exemplo de seletor
      this.addToCartButtonSelector = '.btn_inventory'; // Exemplo de seletor
      this.cartLinkSelector = '.shopping_cart_link'; // Exemplo de seletor
    }
  
    // Método para navegar até a página de produtos
    async navigate() {
      await this.page.goto('https://www.saucedemo.com/inventory.html'); // URL de exemplo
    }
  
    // Método para adicionar um produto ao carrinho
    async addToCart() {
      await this.page.click(this.addToCartButtonSelector);
    }
  
    // Método para acessar o carrinho
    async goToCart() {
      await this.page.click(this.cartLinkSelector);
    }
  
    // Método para obter o título do produto
    async getProductTitle() {
      return await this.page.textContent(this.productTitleSelector);
    }
  }
  
  module.exports = { ProductsPage };
  