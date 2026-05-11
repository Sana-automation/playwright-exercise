import { test} from "@playwright/test";
import { POManager } from "../pages/PageObjectManager";
//import { HomePage } from "../pages/HomePage";
//const dataset=JSON.parse(JSON.stringify(require('../utils/testData.json')))
import dataset from "../utils/testData.json"

for(const data of dataset){
test(`Product-Search Functionlity ${data.productName,data.url}`,async ({page})=>{
    const poManager=new POManager(page)
    await poManager.getHomePage().goToUrl(data.url)
    await poManager.getHomePage().clickOnHomePage()
    await poManager.getProductsPage().clickOnProductTab()
    await poManager.getProductsPage().searchAndSelectProduct(data.productName)
    await poManager.getProductsPage().verifyTheProduct(data.productName)
}
)}


