// /support/hooks.js
const { beforeAll, afterAll } = require('@playwright/test');

beforeAll(async () => {
  console.log('Iniciando os testes...');
});

afterAll(async () => {
  console.log('Finalizando os testes...');
});
