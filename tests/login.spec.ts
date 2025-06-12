import { test, expect } from '@playwright/test';

test.describe('Login Tests for SauceDemo', () => {
    test('Login with valid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page).toHaveURL(/.*inventory/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Login with invalid credentials shows error', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'wrong_password');
        await page.click('#login-button');
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test('Login with empty fields shows error', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.click('#login-button');
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
});
