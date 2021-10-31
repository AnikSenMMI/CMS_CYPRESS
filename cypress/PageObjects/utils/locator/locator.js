
class locator
{
    url = "https://cms-dev.musiczi.com/"
    user_icon = '.dropbtn'
    user_icon_dropdown_content = ".dropdown-content"
    span = "span"

    #CMS_USER_SIGNUP
    first_name = ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    submit_button = "//button[normalize-space()='Submit for Review']"
    first_name_space_error = "//p[normalize-space()='Spaces are not allowed']"
    phone_field = ':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    phone_field_xpath = "//input[@name='phoneNumber']"
}


export default locator