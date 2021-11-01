
class locator
{
    url = "https://cms-dev.musiczi.com/"
    user_icon = '.dropbtn'
    user_icon_dropdown_content = ".dropdown-content"
    span = "span"

    #CMS_USER_SIGNUP
    first_name = ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    last_name = "//input[@name='lastName']"
    phone_number = "//input[@name='phoneNumber']"
    employee_id_field = "//input[@placeholder='Employee ID']"
    email_field = "//input[@name='email']"
    password_field = "//input[@name='password']"
    confirm_pass_field = "//input[@name='confirmPassword']"
    gender_field = "//input[@name='gender']"
    date_field = "//input[@id='date']"
    submit_button = "//button[normalize-space()='Submit for Review']"
    first_name_space_error = "//p[normalize-space()='Spaces are not allowed']"
    phone_field = ':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    phone_field_xpath = "//input[@name='phoneNumber']"
   
    invalid_email_address_error = "//p[normalize-space()='Domain should be radiobaksho.com']"


    // LOGIN_PAGE_LOCATOR
    login_header = "//div[@class='modal-title h4']"
}


export default locator