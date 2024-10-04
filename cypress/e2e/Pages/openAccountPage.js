import selectors from '../../e2e/Selectors/openAccountSelectors';

export default class OpenAccountPage {
    get customer() {
        return cy.get(selectors.customer);
    }
    get currency() {
        return cy.get(selectors.currency);
    }
    get processButton() {
        return cy.get(selectors.processButton);
    }
}