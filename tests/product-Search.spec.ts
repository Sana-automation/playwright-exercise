import { test} from "@playwright/test";
import { POManager } from "../pages/PageObjectManager";
//import { HomePage } from "../pages/HomePage";
//const dataset=JSON.parse(JSON.stringify(require('../utils/testData.json')))
import dataset from "../utils/testData.json"

for(const data of dataset){
test(`Product-Search Functionlity ${data.productName,data.url}`,async ({page})=>{
   // const context=await browser.newContext()
    //const page= await context.newPage()
    const poManager=new POManager(page)
    const homePage= poManager.getHomePage()
    await homePage.goToUrl(data.url)
    await homePage.clickOnHomePage()

    const productsPage=poManager.getProductsPage()
    await productsPage.clickOnProductTab()
    await productsPage.searchAndSelectProduct(data.productName)
    await productsPage.verifyTheProduct(data.productName)
}
)}


