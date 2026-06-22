import {test,expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mad.platformcommons.dev');

  await expect(page.getByRole('navigation', { name: 'nav' })).toBeVisible();

  await page.getByRole('button', { name: 'LOG IN' }).click();
  await expect(page.getByRole('img', { name: 'banner' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('huzaiftest@yopmail.com');

  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: 'Enter password' }).click();
  await page.getByRole('textbox', { name: 'Enter password' }).fill('password1');


  await page.locator("(//span[contains(text(),'Sign In')])[1]").click();


  //************
  // await expect(page.getByRole('link', { name: 'Company logo' })).toBeVisible();

  // await page.getByText('Project-Angular 20 Testing').click();

  // await page.waitForTimeout(3000);

  // await page.getByRole('button', { name: 'Complete Registration' }).click();
  // await expect(page.getByRole('button', { name: 'go-back Go Back' })).toBeVisible();

  // await page.getByRole('button', { name: 'Continue' }).click();
  // await expect(page.getByRole('button', { name: 'Add New Language' })).toBeVisible();

  // await page.locator('#mat-select-value-8').click();
  // await expect(page.getByRole('option', { name: 'Pan Card' })).toBeVisible();

  // await page.getByRole('option', { name: 'Ration Card' }).click();
  // await page.getByRole('button', { name: 'Upload your ID Proof File' }).click();
  // await page.getByRole('button', { name: 'Upload your ID Proof File' }).setInputFiles('Event-Angular 20 Testing.pdf');
  // await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();

  // await page.locator('#mat-select-value-25').click();
  // await expect(page.getByRole('option', { name: 'Ahirani' })).toBeVisible();

  // await page.getByRole('option', { name: 'Danish' }).click();
  // await expect(page.getByRole('combobox', { name: 'Danish' })).toBeVisible();

  // await page.getByRole('radio', { name: 'No' }).check();
  // await page.getByRole('textbox', { name: 'Website*' }).click();
  // await page.getByRole('textbox', { name: 'Website*' }).fill('www.hdfc.com');
  // await page.getByRole('button', { name: 'Continue' }).click();
});
