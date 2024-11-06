const loginElements = require('../elements/loginElements');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator(loginElements.usernameInput);
    this.passwordField = page.locator(loginElements.passwordInput);
    this.loginButton = page.locator(loginElements.loginButton);
    this.errorMessage = page.locator(loginElements.errorMessage);
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };