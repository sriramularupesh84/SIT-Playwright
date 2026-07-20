// To provide all re usable methods / functions related to whole application
import { Global } from "./Global";
export class General extends Global{
  //Open application
  async openApplication (){
    await this.page.goto(this.url);
    await this.page.waitForTimeout(3000);
    console.log("Application opened");
      }
//Login to  Appliaction 
async login(){
    await this.page.locator(this.textbox_loginname).fill(this.userName);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.waitForTimeout(3000);
    }
//Logout Application
async logout(){
    await this.page.locator(this.button_logout).click;
    console.log("Logout completed")
}
}