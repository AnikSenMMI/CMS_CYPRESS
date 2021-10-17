/// <reference types = "cypress"/>
require('cypress-xpath')
import BasePage from '../../PageObjects/BasePage'
const base = new BasePage()
import locator from "../../PageObjects/locator"
const locator1 = new locator()
describe("test_RBS_565_The_hover_over_menu_should_display_within_Log_in_and_Create_An_Account_option",()=>{
    afterEach("waiting",() => {
        base.waiting_for_certain_time(6000)
      })
    it("Visiting the Website",()=>{
        
        base.visit(locator1.url)
    })
    it("hovering Over the User Icon",()=>
    {
        base.hovering_on_element(locator1.user_icon)
    })
    it("hovering over user icon reveal two menu",()=>
    {
        base.element_has_length(locator1.user_icon_dropdown_content,locator1.span,2)
    })
})