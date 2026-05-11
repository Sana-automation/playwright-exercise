import {Page,Locator,expect} from "@playwright/test"

export class ProductsPage{
    page:Page
    productsTab:Locator
    searchProduct:Locator
    submitButton:Locator
    selectProduct:Locator
    productText:Locator

    constructor(page:Page){
        this.page=page
        this.productsTab=page.locator('//a[@href="/products"]')
        this.searchProduct=page.locator('input#search_product')
        this.submitButton=page.locator('#submit_search')
        this.selectProduct=page.locator('.product-image-wrapper')
        this.productText=page.locator('.product-image-wrapper p')
    }
    async clickOnProductTab(){
       await this.productsTab.click()
    }

    async searchAndSelectProduct(productName:string){
        await this.searchProduct.fill(productName)
        await this.submitButton.click()
    }

    async verifyTheProduct(productName:string){
        await expect((this.selectProduct).nth(1)).toBeVisible()
        await expect(this.productText.nth(2)).toContainText(productName)
    }


}module.exports={ProductsPage}