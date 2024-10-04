import selectors from '../../e2e/Selectors/homepageSelectors'

export default class Header {
    get headerTitle() {
        return cy.get(selectors.headerTitle)
    }
    get homeButton() {
        return cy.get(selectors.homeButton);
    }
}