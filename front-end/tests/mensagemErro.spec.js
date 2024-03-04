
import { test, expect } from '@playwright/test';

  test('Campos obrigatorios em branco', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await page.getByRole('button', { name: 'Register' }).click();
    
    //FirstName
    const errorMessagesFirst = page.locator('#FirstName-error');
    await expect(errorMessagesFirst).toHaveText('First name is required.');

    //LastName
    const errorMessagesLast = page.locator('#LastName-error');
    await expect(errorMessagesLast).toHaveText('Last name is required.');

    //Email
    const errorMessagesEmail = page.locator('#Email-error');
    await expect(errorMessagesEmail).toHaveText('Email is required.');

    //Senha
    const errorMessagesSenha = page.locator('#Password-error');
    await expect(errorMessagesSenha).toHaveText('Password is required.');

    //Corfimação de senha
    const errorMessagesConfirmaçao = page.locator('#ConfirmPassword-error');
    await expect(errorMessagesConfirmaçao).toHaveText('Password is required.');

  });

  test('Email invalido', async ({ page }) => {
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
    await page.getByLabel('Email:').fill('amandacopriva123.com');
    
    const errorMessagesEmailIncorreto = page.locator('#Email-error');
    await page.getByLabel('Company name:').click();
    await expect(errorMessagesEmailIncorreto).toHaveText('Wrong email');
  });
  

  test('Senha incompativel', async ({ page }) => {
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
    await page.getByLabel('Email:').fill('amandacopriva123@gmail.com');
    await page.getByLabel('Company name:').click();
    await page.getByLabel('Company name:').fill('amanda.copriva123');
    await page.getByLabel('Password:', { exact: true }).click();
    await page.getByLabel('Password:', { exact: true }).fill('123456');
    await page.getByLabel('Confirm password:').click();
    await page.getByLabel('Confirm password:').fill('12345678');
    
    const errorSenhaIncorreta = page.locator('#ConfirmPassword-error');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(errorSenhaIncorreta).toHaveText('The password and confirmation password do not match.');
    
   
  });

  test('Senha fora do padrao', async ({ page }) => {
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
    await page.getByLabel('Email:').fill('amandacopriva456@gmail.com');
    await page.getByLabel('Company name:').click();
    await page.getByLabel('Company name:').fill('amanda.copriva456');
    await page.getByLabel('Password:', { exact: true }).click();
    await page.getByLabel('Password:', { exact: true }).fill('12345');
    await page.getByLabel('Confirm password:').click();
    await page.getByLabel('Confirm password:').fill('12345');
    
    const errorSenha = page.locator('#Password-error');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(errorSenha).toHaveText('Password must meet the following rules: must have at least 6 characters');
   
  });
  