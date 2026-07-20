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
async login(userName: string = this.userName, password: string = this.password){
    await this.page.locator(this.textbox_loginname).fill(userName);
    await this.page.locator(this.textbox_password).fill(password);
    await this.page.locator(this.button_login).click();
    await this.page.waitForTimeout(3000);
    }
//Logout Application
async logout(){
    await this.page.locator(this.button_logout).click();
    console.log("Logout completed")
}
}