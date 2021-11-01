// import locator from "locator"
require('cypress-xpath')
import "cypress-real-events/support";
import locator from  "../utils/locator/locator";
const main_locator = new locator()
import BasePage from "./BasePage";
const base_page = new BasePage();
class SignIn
{
    signIn_text = "Login"

    click_on_login_option()
    {
        base_page.clicking_on_contains_text(this.signIn_text)
        cy.xpath(main_locator.login_header).invoke('text').should('contain',"Sign In")
    }
    click_on_create_account_option()
    {
        cy.xpath(main_locator.create_an_account_option).click()
        cy.xpath(main_locator.login_header).invoke('text').should('contain',"Create An Account")
    }

}

export default SignIn