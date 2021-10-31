// import locator from "locator"
require('cypress-xpath')
import "cypress-real-events/support";
import locator from  "../utils/locator/locator"
const locator1 = new locator()
class SignUp
{
    First_name_with_space = "Test Account With Space"
    phone_number_with_char = "1234asd123"
    Phone_number = "12345678"

}

export default SignUp