// To provide the test data & objects/ elements related to whole application
import {Page} from "@playwright/test";
export class Global {
    constructor (public page : Page) {
   this.page = page ;
    }
// ************  Test data  ************
public url : string = "https://ctcorphyd.com/SureshIT/login.php";
public userName : string = "sureshit";
public password : string = "sureshit";
// ************  obj / elements  ************
public textbox_loginname = "//input[@name='txtUserName']";
public textbox_password = "//input[@name='txtPassword']";
public button_login = "//input[@name='Submit']";
public button_logout = "//a[text()='Logout']";



}
