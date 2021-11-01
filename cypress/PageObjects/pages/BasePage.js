// import locator from "locator"
require('cypress-xpath')
import "cypress-real-events/support";
import locator from  "../utils/locator/locator"
const locator1 = new locator()
class BasePage
{
    visit(url)
    {
        cy.visit(url)
    }
    scrolling_to_center()
    {
        cy.scrollTo('center',{ easing: 'linear' }) 
    }
    scrolling_to_specific_pixels(pixels)
    {
        cy.scrollTo(0,pixels)
    }
    scrolling_to_top()
    {
        cy.scrollTo("top",{ easing: 'linear' })
    }
    scrolling_to_bottom()
    {
        cy.scrollTo('bottom',{ easing: 'linear' })
    }
    scrolling_to_content(name)
    {
        cy.get(name).scrollIntoView()
    }
    writting_on_input(path,value)
    {   
        // cy.get('[data-test=submitIsVisible]', { timeout: 10000 }).should('be.visible');
        const field=cy.get(path, { timeout: 10000 }).should('be.visible')
        field.clear()
        field.type(value)
        
    }
    writting_on_input_with_xpath(path,value)
    {   
        // cy.get('[data-test=submitIsVisible]', { timeout: 10000 }).should('be.visible');
        const field=cy.xpath(path, { timeout: 10000 }).should('be.visible')
        field.clear()
        field.type(value)
        
    }
    press_enter(path)
    {
        cy.get(path).type('{enter}')
    }
    waiting_for_certain_time(value)
    {
        cy.wait(value)
    }
    clicking_on_contains_text(text)
    {
        cy.contains(text, { matchCase: false }).click({ force: true })
    }
    clicking(value)
    {
        cy.get(value).click()
    }
    going_previous_page()
    {
        cy.go('back')
    }
    url_should_include(value)
    {
        cy.url().should('include',value)
    }
    subscribing(path,Email)
    {
        const field= cy.get(path).should('be.visible')
        field.clear()
        field.type(Email)
        this.press_enter(path)
    }
    hovering_on_element(path)
    {
        cy.get(path).realHover()
    }
    screenshot_entire_page()
    {
        cy.screenshot()
    }
    screenshot_specific_area(positionX,positionY,height,width)
    {
        cy.screenshot({ x: positionX, y: positionY, width: width, height: height })
    }
    clicking_on_first_list(path)
    {
        cy.get(path).first().click()
    }
    clicking_using_xpath(path)
    {
        cy.xpath(path).click()
    }
    select_dropdown_menu(path,option)
    {
        cy.xpath(path).select(option)
    }
    element_has_length(path,find,length)
    {
        cy.get(path).find(find).should('have.length', length)
    }
    get_attribute_value (locator,attribute_name)
    {
        var text = cy.xpath(locator).invoke('attr',attribute_name)
        return text;
    }
    select_option_from_the_list(path, value)
    {
        cy.xpath(path).select(value)
    }
}

export default BasePage