// import locator from "locator"
require('cypress-xpath')
import "cypress-real-events/support";
import locator from  "../utils/locator/locator"
const locator1 = new locator()
class SignIn
{
    signIn_text = "Login"

}

export default SignIn