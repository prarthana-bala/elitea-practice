import { test, expect } from '@playwright/test';

test('EPAM client work navigation and verification', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button', { name: 'Services' }).first().click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).first().click();

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();

  await page.screenshot({ path: 'screenshots/epam-client-work.png', fullPage: true });
});
