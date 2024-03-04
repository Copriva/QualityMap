import { test, expect } from '@playwright/test';
import exp from 'constants';

test('registro com sucesso', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
  await page.getByLabel('Female').check();
  await page.getByLabel('First name:').click();
  await page.getByLabel('First name:').fill('amanda');
  await page.getByLabel('Last name:').click();
  await page.getByLabel('Last name:').fill('copriva');
  await page.locator('select[name="DateOfBirthDay"]').selectOption('12');
  await page.locator('select[name="DateOfBirthMonth"]').selectOption('10');
  await page.locator('select[name="DateOfBirthYear"]').selectOption('1995');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('amanda.copriva1@gmail.com.br');
  await page.getByLabel('Company name:').click();
  await page.getByLabel('Company name:').fill('amanda.copriva');
  await page.getByLabel('Newsletter:').uncheck();
  await page.getByLabel('Password:', { exact: true }).click();
  await page.getByLabel('Password:', { exact: true }).fill('123456');
  await page.getByLabel('Confirm password:').click();
  await page.getByLabel('Confirm password:').fill('123456');
  await page.getByRole('button', { name: 'Register' }).click();
  //validando mensagem de sucesso
  const title = page.locator('.result');
  await expect(title).toHaveText('Your registration completed');
  //validando se o botão continue está habilitado
  await page.getByRole('link', { name: 'Continue' }).isEnabled(true);
  
});

test('validar data', async ({ page }) => {

 await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
 await page.locator('select[name="DateOfBirthDay"]').selectOption('12');
 await page.locator('select[name="DateOfBirthMonth"]').selectOption('10');
 await page.locator('select[name="DateOfBirthYear"]').selectOption('1995');

// verificação da validação do campo Data
  const Day =  page.locator('select[name="DateOfBirthDay"]');
  await expect(Day).toHaveValue('12');
// verificação da validação do campo Mês
  const Month =  page.locator('select[name="DateOfBirthMonth"]');
  await expect(Month).toHaveValue('10');
// verificação da validação do campo Ano
  const Year =  page.locator('select[name="DateOfBirthYear"]');
  await expect(Year).toHaveValue('1995');
});



