import selectors from "../../Selectors/customerHomepageSelectors";

export default class CustomerHomepage {
    get yourNameDropdown() {
        return cy.get(selectors.yourNameDropdown);
    }
    get loginButton() {
        return cy.get(selectors.loginButton);
    }
}