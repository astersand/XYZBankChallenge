import selectors from "../../e2e/Selectors/homepageSelectors"
import BankManagerHomepage from "./Bank Manager Pages/bankManagerHomePage";

export default class Homepage {
    
    get customerLoginButton() {
        return cy.get(selectors.customerLoginButton);
    }
    get bankManagerLoginButton() {
        return cy.get(selectors.bankManagerLogin);
    }
    bankLoginButtonClick() {
        this.bankManagerLoginButton.click();
        return new BankManagerHomepage();
    }
}