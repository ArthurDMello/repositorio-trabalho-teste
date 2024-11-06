// /pages/checkoutPage.js
const checkoutElements = require('../elements/checkoutElements');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator(checkoutElements.firstNameInput);
    this.lastNameInput = page.locator(checkoutElements.lastNameInput);
    this.zipCodeInput = page.locator(checkoutElements.zipCodeInput);
    this.continueButton = page.locator(checkoutElements.continueButton);
    this.finishButton = page.locator(checkoutElements.finishButton);
    this.checkoutCompleteMessage = page.locator(checkoutElements.checkoutCompleteMessage);
  }

  async enterShippingInfo(firstName, lastName, zipCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async getCheckoutCompleteMessage() {
    return await this.checkoutCompleteMessage.textContent();
  }
}

module.exports = { CheckoutPage };
