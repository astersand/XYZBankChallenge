import CustomerSelectionPage from "../Pages/Customer Pages/customerSelectionPage";
import env from '../../config/environments';

describe('Customer login page', () => {
    const customerPage = new CustomerSelectionPage();
    before('Open homepage', () => {
        cy.intercept('GET', `${env.baseURL}/customerView.html`).as('customerPage');
        cy.visit(`${env.baseURL}/#/customer`);
        cy.wait('@customerPage');
    });

    it('Should contain 5 customers', () => {
        customerPage.customerSelection.find('option').should('have.length', 6);
    });

    it("Login button should not be visible", () => {
        customerPage.loginButton.should('not.be.visible');
    });

    it('Should select a customer', () => {
        customerPage.customerSelection.select('Hermoine Granger');
        customerPage.loginButton.should('be.visible');
    });
    it('Should login as a customer', () => {
        if(customerPage.customerSelection.invoke('text') !== 'Hermoine Granger') {
            cy.pause();
            customerPage.customerSelection.select('Hermoine Granger');
        }
        customerPage.loginButton.click();
        cy.url().should('contain', 'account');
    });
});