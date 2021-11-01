// import locator from "locator"
require('cypress-xpath')
import "cypress-real-events/support";
import locator from  "../utils/locator/locator"
const main_locator = new locator()
import BasePage from "./BasePage";
const base = new BasePage
class SignUp
{
    First_name_with_space = "Test Account With Space";
    phone_number_with_more_then_15_length = "1234567890123456";
    phone_number_with_char = "1234asd123";
    numerical_Phone_number = "12345678";
    employee_id_with_more_than_8_charachter = "MMIabcdefgh123123";
    invalid_email_address = "anik.sen@@musiczi.comm";

    first_name = "First";
    last_name = "Last";
    phone_number = "01842184019";
    employee_id = "MMI-BD01040104";
    email = "anik.sen" + Math.floor(Math.random() * 1000) + "@radiobaksho.com";
    pass = "asdfgh#qwerty";
    gender = "Male";

    
    click_on_submit_button()
    {
        cy.xpath(main_locator.submit_button).click();
    }

    sign_up(first_name, last_name, phone_number, employee_id, email, pass,confirm_pass, gender)
    {
        base.writting_on_input(main_locator.first_name, first_name);
        base.writting_on_input_with_xpath(main_locator.last_name, last_name);
        base.writting_on_input(main_locator.phone_field, phone_number);
        base.writting_on_input_with_xpath(main_locator.employee_id_field, employee_id);
        base.writting_on_input_with_xpath(main_locator.email_field, email);
        base.writting_on_input_with_xpath(main_locator.password_field, pass);
        base.writting_on_input_with_xpath(main_locator.confirm_pass_field, confirm_pass);
        base.writting_on_input_with_xpath(main_locator.gender_field,gender);
        
    }

}

export default SignUp