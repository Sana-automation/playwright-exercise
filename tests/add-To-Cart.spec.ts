import{test} from "@playwright/test"
import { POManager } from "../pages/PageObjectManager"
//import dataset from "../utils/testData.json"
import dataset from"../utils/testData.json"

for(const data of dataset)
test(`Add To Cart ${data.url}`,async ({page})=>{
    const poManager=new POManager(page)
    const homePage= poManager.getHomePage()
    await homePage.goToUrl(data.url)

    const productsPage=poManager.getProductsPage()
    await productsPage.clickOnProductTab()
    const cartPage=poManager.getCartPage()
    //await cartPage.goToProductTab()
    await cartPage.addItemToCart()
    await cartPage.navigateCartPage()
    await cartPage.verifyCartItems()


})
