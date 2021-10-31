/// <reference types = "cypress"/>
require('cypress-xpath')
import BasePage from '../../PageObjects/pages/BasePage'
const base = new BasePage()
import locator from  "../../PageObjects/utils/locator/locator"
const base_locator = new locator()
describe("test_RBS_565_The_hover_over_menu_should_display_within_Log_in_and_Create_An_Account_option",()=>{
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
    it("hovering over create an account option reveal three more menu",()=>
    {
        base.element_has_length(base_locator.user_icon_dropdown_content,base_locator.span,5)
    })

})