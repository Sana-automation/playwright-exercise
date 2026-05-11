import{test} from "@playwright/test"
import { POManager } from "../pages/PageObjectManager"
import dataset from "../utils/testData.json"

for(const data of dataset){
    test(`Contact Form Submission ${data.username,data.email,data.subject,data.message,data.url}`,async ({page})=>{
        const poManager=new POManager(page)
        const homePage=poManager.getHomePage()
        await homePage.goToUrl(data.url)

        const contactUsPage=poManager.getContactUsPage()
        await contactUsPage.navigateToContactTab()
       // await page.pause()
        await contactUsPage.fillDetailsForm(data.username,data.email,data.subject,data.message)
        await contactUsPage.submitTheForm()
        await contactUsPage.verifyTheMessage()
    })
}