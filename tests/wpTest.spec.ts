import { test, expect } from '@playwright/test';
import assert from 'assert';
import { only } from 'node:test';

test('/wp-content/uploads/', async ({ page }) => {
  await page.goto('./wp-content/uploads/');

  // Expect the /wp-content/uploads/ folder is hidden.
  await expect(page).not.toHaveTitle(/uploads/);
});

test('/wp-content/uploads/wpforms/', async ({ page }) => {
  await page.goto('./wp-content/uploads/wpforms/');

  // Expect the /wp-content/uploads/wpforms/ folder is hidden.
  await expect(page).not.toHaveTitle(/wpforms/);
  await page.getByText('404').allInnerTexts();

});

test('/wp-includes', async ({ page }) => {
  await page.goto('./wp-includes');

  // Expect the /wp-includes/ folder is hidden.
  await expect(page).not.toHaveTitle('');
});

test('/wp-config.php', async ({ page }) => {
  await page.goto('./wp-config.php');

  // // Expect the /wp-config.php file is hidden.
  const headTextWpConf= 'Internal Server Error';
  // await expect(page).not.toHaveTitle('500 Internal Server Error');
  // await page.getByText(headTextWpConf, {exact: true}).allInnerTexts();
  await expect (page.getByText(headTextWpConf, {exact: true})).not.toBeVisible();
  // expect a text is not displayed.
  // const headTextWpConf= '500 Internal Server Error';
  // await expect (page.getByText(headTextWpConf)).not.toBeVisible();
});

test('/wp-links-opml.php', async ({ page }) => {
  await page.goto('./wp-links-opml.php');

  // Expect the /wp-links-opml.php file is hidden.
  await expect(page).not.toHaveTitle(/''/);
  // expect a text is not displayed.
  const headText= 'This XML file does not appear to have any style information associated with it. The document tree is shown below.';
  await expect (page.getByText(headText, {exact: true})).not.toBeVisible();
});

test('wp-trackback.php', async ({ page }) => {
  await page.goto('./wp-trackback.php');

  // Expect the wp-trackback.php file is hidden.
  const responseMessage= "I really need an ID for this to work.";
  await expect(page).not.toHaveTitle('');
  await expect (page.getByText(responseMessage, {exact: true})).not.toBeVisible();

});

test('/xmlrpc.php', async ({ page }) => {
  await page.goto('./xmlrpc.php');

  // Expect the /xmlrpc.php file is hidden.
  const xmlIssue= 'XML-RPC server accepts POST requests only.';
  await expect(page).not.toHaveTitle('');
  await expect (page.getByText(xmlIssue, {exact: true})).not.toBeVisible();
  await page.getByText('404').allInnerTexts();
  

});

test('/wp-load.php', async ({ page }) => {
  await page.goto('./wp-load.php');

  // Expect the /wp-load.php file is hidden.
  //const xmlIssue= 'XML-RPC server accepts POST requests only.';
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();
    //await expect (page.getByText(xmlIssue, {exact: true})).not.toBeVisible();

});

test('/wp-settings.php', async ({ page }) => {
  await page.goto('./wp-settings.php');

  // Expect the /wp-settings.php file is hidden.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});

test('/readme.html', async ({ page }) => {
  await page.goto('./readme.html');

  // Expect the /readme.html file is hidden.
  const responseText= "Semantic Personal Publishing Platform";
  await expect (page.getByText(responseText, {exact: true})).not.toBeVisible();

});

test('/wp-cron.php', async ({ page }) => {
  await page.goto('./wp-cron.php');

  // Expect the /readme.html file is hidden.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});

test('/wp-content/plugins/social-warfare/', async ({ page }) => {
  await page.goto('./wp-content/plugins/social-warfare/');

  // Expect the /wp-content/plugins/social-warfare/ folder isn't exists.
  await expect(page).not.toHaveTitle('');
  await page.getByText('404').allInnerTexts();

});
