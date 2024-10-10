import customerSelectionPageSelectors from "../../Selectors/customerSelectionPageSelectors";

export default class CustomerSelectionPage {
    get customerSelection() {
        return cy.get(customerSelectionPageSelectors.customerSelection);
    }
    get loginButton() {
        return cy.get(customerSelectionPageSelectors.loginButton);
    }
}