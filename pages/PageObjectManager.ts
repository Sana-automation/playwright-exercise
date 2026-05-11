import {HomePage} from "./HomePage"
import {ProductsPage} from "./ProductsPage"
import {CartPage} from "./CartPage"
import {ContactUsPage} from "./ContactUsPage"
import {Page} from '@playwright/test'

export class POManager{
    page:Page;
    homePage:HomePage;
    productsPage:ProductsPage;
    cartPage:CartPage;
    contactUsPage:ContactUsPage;

constructor(page:Page){
    this.page=page
    this.homePage=new HomePage(this.page)
    this.productsPage=new ProductsPage(this.page)
    this.cartPage=new CartPage(this.page)
    this.contactUsPage=new ContactUsPage(this.page)

}
getHomePage(){
    return this.homePage
}
getProductsPage(){
    return this.productsPage
}
getCartPage(){
    return this.cartPage
}
getContactUsPage(){
    return this.contactUsPage
}}
module.exports={POManager}