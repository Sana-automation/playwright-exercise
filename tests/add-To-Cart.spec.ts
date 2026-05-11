import{test} from "@playwright/test"
import { POManager } from "../pages/PageObjectManager"
//import dataset from "../utils/testData.json"
import dataset from"../utils/testData.json"

for(const data of dataset)
test(`Add To Cart ${data.url}`,async ({page})=>{
    const poManager=new POManager(page)
    await poManager.getHomePage().goToUrl(data.url)
    await poManager.getProductsPage().clickOnProductTab()
    await poManager.getCartPage().addItemToCart()
    await poManager.getCartPage().navigateCartPage()
    await poManager.getCartPage().verifyCartItems()


})
