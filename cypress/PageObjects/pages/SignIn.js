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
        base_page.clicking_on_contains_text(self.signIn_text)
        cy.get(main_locator.login_header).invoke('text').should('contain',"Sign In");
    }
}

export default SignIn