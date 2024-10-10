import Header from '../Pages/Bank Manager Pages/header';
import Homepage from '../Pages/homepage';
import env from '../../config/environments';

describe('Homepage tests', () => {
    const homepage = new Homepage();
    const header = new Header();
    before('Open the test page', () => {
        cy.intercept('GET', `${env.baseURL}/options.html`).as('homepage');
        cy.visit(`${env.baseURL}/#/login`);
        cy.wait('@homepage');
    })
    it('Home button should be visible and enabled', () => {
        header.homeButton.should('be.visible').and('be.enabled');
    });
    it('Header text should be visible', () => {
        header.headerTitle.should('contain.text', 'XYZ Bank');
    });
    it('Customer login button should be visible and enabled', () => {
        homepage.customerLoginButton.should('be.visible').and('be.enabled');
    });
    it('Bank manager login button should be visible and enabled', () => {
        homepage.bankManagerLoginButton.should('be.visible').and('be.enabled');
    });
    
})