import { Given, When, Then } from '@cucumber/cucumber';
import { POManager } from "../../pages/PageObjectManager";
//import{expect} from "@playwright/test";
import {chromium} from '@playwright/test'

Given('the user navigates to the ecommerce application {string}', {timeout:100*100},async function (url) {
  const browser= await chromium.launch({
    headless:false
  })
  const context= await browser.newContext()
  const page= await context.newPage()
  this.poManager=new POManager(page)
 await this.poManager.getHomePage().goToUrl(url)
});

When('the user is on the homepage', async function () {
    await this.poManager.getHomePage().clickOnHomePage()

});

When('the user clicks on the product tab', async function () {

await this.poManager.getProductsPage().clickOnProductTab()

});

Then('the user adds an item to the cart',async function () {
  await this.poManager.getCartPage().addItemToCart()
});

When('the user navigates to the cart page', async function () {
  await this.poManager.getCartPage().navigateCartPage()
});

Then('the cart page should display the added item in the cart', async function () {
 await this.poManager.getCartPage().verifyCartItems()
});

When('the user clicks on the contact us tab', async function () {
  await this.poManager.getContactUsPage().navigateToContactTab()
});

When('the user fills the contact form {string}, {string}, {string}, and {string}, and submits it', async function (name, email, subject, message) {
  await this.poManager.getContactUsPage().fillDetailsForm(name, email, subject, message)
});

Then('the user should see a success message after submitting the form', async function () {
  await this.poManager.getContactUsPage().submitTheForm()
  await this.poManager.getContactUsPage().verifyTheMessage()
});