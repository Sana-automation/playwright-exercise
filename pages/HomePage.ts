import {Page,Locator} from "@playwright/test"
//import { BasePage } from "./BasePage";

export class HomePage{
    page:Page;
    homeTab:Locator;
    acceptButton:Locator;

constructor(page:Page){
    this.page=page
    this.homeTab=page.getByRole('link',{name:'Home'})
    this.acceptButton=page.locator('button:has-text("Consent")')

}

async goToUrl(url:string){
await this.page.goto(url)
if (await this.acceptButton.isVisible()) {
    await this.acceptButton.click();
  }
}

async clickOnHomePage(){
    await this.homeTab.click()
}
}
module.exports={HomePage}