import {Page,Locator,expect} from "@playwright/test"

export class ContactUsPage{
    page:Page
    contactTab:Locator
    enterNameTextBox:Locator
    enterEmailTextBox:Locator
    enterSubjectTextBox:Locator
    enterMessageTextBox:Locator
    submitBtn:Locator
    msgText:Locator

constructor(page:Page){
    this.page=page
    this.contactTab=page.locator('//a[@href="/contact_us"]')
    this.enterNameTextBox=page.getByPlaceholder('Name')
    this.enterEmailTextBox=page.locator('input[name="email"]')
    this.enterSubjectTextBox=page.getByPlaceholder('Subject')
    this.enterMessageTextBox=page.locator('#message')
    this.submitBtn=page.locator('input[value="Submit"]')
    this.msgText=page.locator('div.status.alert.alert-success')
}
async navigateToContactTab(){
    await this.contactTab.click()
}
async fillDetailsForm(username:string,email:string,subject:string,message:string){
    await this.enterNameTextBox.fill(username)
    await this.enterEmailTextBox.fill(email)
    await this.enterSubjectTextBox.fill(subject)
    await this.enterMessageTextBox.fill(message)
}
async submitTheForm(){
 this.page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Press OK to proceed!')
        await dialog.accept()
    })
    await this.submitBtn.click()
}
async verifyTheMessage(){
    await expect(this.msgText).toHaveText('Success! Your details have been submitted successfully.')
}}module.exports={ContactUsPage}