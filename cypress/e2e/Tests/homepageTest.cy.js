import Header from '../Pages/header';
import Homepage from '../Pages/homepage';

describe('Homepage tests', () => {
    const homepage = new Homepage();
    const header = new Header();
    beforeEach('Open the test page', () => {
        cy.intercept('GET', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/options.html').as('homepage');
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
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