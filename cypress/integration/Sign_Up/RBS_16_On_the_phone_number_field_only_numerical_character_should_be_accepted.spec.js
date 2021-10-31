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


describe("RBS_16_On_the_phone_number_field_only_numerical_character_should_be_accepted",()=>{
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
    it ("input phone number with character in it", ()=>
    {
        base.writting_on_input(base_locator.phone_field, SignUp_page.phone_number_with_char)
    })

    it("assertion--> phone field doesn't has any character in it", ()=>
    {
        cy.xpath(base_locator.phone_field_xpath).invoke('attr','value').should('not.eq', SignUp_page.phone_number_with_char)
        // cy.expect(text).to.equal("Spaces are not allowed")

    })

})