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


describe("RBS_19_Validation_error_message_will_appear_for_the_invalid_email_address",()=>{
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
    it("Hovering Over create account icon",()=>
    {
        base.clicking_on_contains_text("Create An Account")

    })
    it("click on CMS USER",()=>
    {
        base.clicking_on_contains_text(navigation_menu.CMS_USER)
    })
    it ("input invalid email address", ()=>
    {
        base.writting_on_input_with_xpath(base_locator.email_field, SignUp_page.invalid_email_address)
    })

    it("clicking on Submit button",()=>
    {
        SignUp_page.click_on_submit_button()
    })

    it("assertion--> There is an error under the email field", ()=>
    {
        cy.xpath(base_locator.invalid_email_address_error).should('contain' , "Domain should be radiobaksho.com")
    })

})