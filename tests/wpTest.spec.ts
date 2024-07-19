import { test, expect } from '@playwright/test';

test('/wp-content/uploads/', async ({ page }) => {
  await page.goto('./wp-content/uploads/');

  // Expect the /wp-content/uploads/ folder is hidden.
  await expect(page).not.toHaveTitle(/uploads/);
});

test('/wp-content/uploads/wpforms/', async ({ page }) => {
  await page.goto('./wp-content/uploads/wpforms/');

  // Expect the /wp-content/uploads/wpforms/ folder is hidden.
  await expect(page).not.toHaveTitle(/wpforms/);
});

test('/wp-includes', async ({ page }) => {
  await page.goto('./wp-includes');

  // Expect the /wp-includes/ folder is hidden.
  await expect(page).not.toHaveTitle(/wp-includes/);
});

test('/wp-config.php', async ({ page }) => {
  await page.goto('./wp-includes');

  // Expect the /wp-config.php file is hidden.
  await expect(page).not.toHaveTitle(/Internal/);
});

test('/wp-links-opml.php', async ({ page }) => {
  await page.goto('./wp-links-opml.php');

  // Expect the /wp-config.php file is hidden.
  await expect(page).not.toHaveTitle(/''/);
});

// test('has title', async ({ page }) => {
//   await page.goto('baseURL');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Abbeydale Christian Fellowship/);
// });

// test('Contact US link', async ({ page }) => {
//   await page.goto('baseURL');

//   // Click the Contact Us link.
//   await page.getByRole('link', { name: 'Contact Us' }).click();

//   // Expects page to have a heading Contact Us.
//   await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();

  
// });
// test('Do you have', async ({ page }) => {
//   await page.goto('baseURL/contact-us/');
//   // Expects page has a 'Do you have a question about our church or our faith?' text
//   await expect(page.getByText('Do you have a question about our church or our faith?')).toBeVisible();
  
// });