import bankManagerHomepageSelectors from "../../e2e/Selectors/bankManagerHomepageSelectors";

export default class BankManagerHomepage {
    get addCustomerButton() {
        return cy.get(bankManagerHomepageSelectors.addCustomer);
    }
    get openAccountButton() {
        return cy.get(bankManagerHomepageSelectors.openAccount);
    }
    get customersButton() {
        return cy.get(bankManagerHomepageSelectors.customers);
    }
     addCustomerButtonClick() {
        this.addCustomerButton.click();
     }
}