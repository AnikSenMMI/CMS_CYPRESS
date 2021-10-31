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


describe("RBS_17_User should not be able to add RBS_17_characters_more_than_the_limit_on_the_phone_number_field",()=>{
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
    it ("input phone number more then 13 numerical value", ()=>
    {
        base.writting_on_input(base_locator.phone_field, SignUp_page.phone_number_with_more_then_15_length)
    })

    it("assertion--> phone field doesn't has any character in it", ()=>
    {
        cy.xpath(base_locator.phone_field_xpath).invoke('attr','value').should('have.length', 13)
        // cy.expect(text).to.equal("Spaces are not allowed")

    })

})