import selectors from '../../Selectors/homepageSelectors'

export default class Header {
    get headerTitle() {
        return cy.get(selectors.headerTitle)
    }
    get homeButton() {
        return cy.get(selectors.homeButton);
    }
}