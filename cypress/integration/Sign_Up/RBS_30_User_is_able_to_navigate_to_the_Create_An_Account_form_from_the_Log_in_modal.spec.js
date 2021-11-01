/// <reference types = "cypress"/>
require('cypress-xpath')
import BasePage from '../../PageObjects/pages/BasePage'
const base = new BasePage()
import locator from  "../../PageObjects/utils/locator/locator"
import SignIn from '../../PageObjects/pages/SignIn'
import SignUp from '../../PageObjects/pages/SignUp'
const SignIn_page = new SignIn()
import navigation_menus from '../../PageObjects/pages/navigation_menu'
const navigation_menu = new navigation_menus()
const base_locator = new locator()
const SignUp_page = new SignUp()


describe("RBS_30_User_is_able_to_navigate_to_the_Create_An_Account_form_from_the_Log_in_modal",()=>{
    afterEach("waiting",() => {
        base.waiting_for_certain_time(6000)
      })
    it("Visiting the Website",()=>{
        
        base.visit(base_locator.url)
    })
    it("hovering Over the User Icon",()=>
    {
        base.hovering_on_element(base_locator.user_icon)
    })
    it("hovering over user icon reveal two menu",()=>
    {
        base.element_has_length(base_locator.user_icon_dropdown_content,base_locator.span,2)
    })
    it ("Clicking on Login Option",()=>{
        SignIn_page.click_on_login_option()
    })

    it("Clicking on create an account option from the login modal",()=>
    {
        SignIn_page.click_on_create_account_option();

    })

})