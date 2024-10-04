import selectors from '../../e2e/Selectors/addCustomerPageSelectors'

export default class AddCustomerPage {
    get firstName() {
        return cy.get(selectors.firstName);
    }
    get lastName() {
        return cy.get(selectors.lastName);
    }
    get postCode() {
        return cy.get(selectors.postCode);
    }
    get addCustomerButton() {
        return cy.get(selectors.addCustomerButton);
    }
    populateForm(firstName, lastName, postCode) {
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.postCode.type(postCode);
    }
}