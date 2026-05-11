import{test} from "@playwright/test"
import { POManager } from "../pages/PageObjectManager"
import dataset from "../utils/testData.json"

for(const data of dataset){
    test(`Contact Form Submission ${data.username,data.email,data.subject,data.message,data.url}`,async ({page})=>{
        const poManager=new POManager(page)
        await poManager.getHomePage().goToUrl(data.url)
        await poManager.getContactUsPage().navigateToContactTab()
        await poManager.getContactUsPage().fillDetailsForm(data.username,data.email,data.subject,data.message)
        await poManager.getContactUsPage().submitTheForm()
        await poManager.getContactUsPage().verifyTheMessage()
    })
}