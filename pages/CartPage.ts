import {Page, Locator,expect} from '@playwright/test'

export class CartPage{
  page:Page;
  addFirstProduct:Locator
  addSecondProduct:Locator
  continueBtn:Locator
  viewCart:Locator
  itemCount:Locator

  constructor(page:Page){
    this.page=page
   // this.productTab=page.getByRole('link',{name:"Products"})
    this.addFirstProduct=page.getByText('Add to cart')
    this.addSecondProduct=page.locator('a.add-to-cart')
    this.continueBtn=page.getByText('Continue Shopping')
    this.viewCart=page.getByText('View Cart')
    this.itemCount=page.locator('tbody tr')
  }

  async addItemToCart(){
    await this.addFirstProduct.first().click()
    await this.continueBtn.click()
    await this.addSecondProduct.nth(2).click()
  }
  async navigateCartPage(){
    await this.viewCart.click()
  }
  async verifyCartItems(){
    await expect(this.itemCount).toHaveCount(2)
  }
}
module.exports={CartPage}