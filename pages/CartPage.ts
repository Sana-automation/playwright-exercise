import {Page, Locator,expect} from '@playwright/test'

export class CartPage{
  page:Page;
  addProduct:Locator
  continueBtn:Locator
  viewCart:Locator
  itemCount:Locator

  constructor(page:Page){
    this.page=page
    this.addProduct=page.locator('(//div[@class="single-products"]/div[1]/a)')
    this.continueBtn=page.getByText('Continue Shopping')
    this.viewCart=page.getByText('View Cart')
    this.itemCount=page.locator('tbody tr')
  }

  async addItemToCart(){
    await this.addProduct.nth(1).click()
    await this.continueBtn.click()
    await this.addProduct.nth(2).click()
  }
  async navigateCartPage(){
    await this.viewCart.click()
  }
  async verifyCartItems(){
    await expect(this.itemCount).toHaveCount(2)
  }
}
module.exports={CartPage}