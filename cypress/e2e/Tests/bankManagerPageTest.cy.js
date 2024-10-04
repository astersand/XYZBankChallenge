import AddCustomerPage from '../Pages/addCustomerPage';
import BankManagerHomepage from '../Pages/bankManagerHomePage';
import Homepage from '../Pages/homepage';
import { faker } from '@faker-js/faker';

describe('Bank manager page test', () => {
    const homepage = new Homepage();
    const bankManagerHomepage = new BankManagerHomepage();
    const addCustomerPage = new AddCustomerPage();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postCode = faker.location.zipCode();
    beforeEach('Open homepage', () => {
        cy.intercept('GET', 'https://www.globalsqa.com/angularJs-protractor/BankingProject/options.html').as('homepage');
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.wait('@homepage');
        homepage.bankLoginButtonClick();
    });
    it('Buttons should be visible on the page', () => {
        bankManagerHomepage.addCustomerButton.should('be.visible').and('be.enabled');
        bankManagerHomepage.customersButton.should('be.visible').and('be.enabled');
        bankManagerHomepage.customersButton.should('be.visible').and('be.enabled');
    });
    it('Should create new customer', () => {
        bankManagerHomepage.addCustomerButton.click();
        bankManagerHomepage.addCustomerButton.invoke('attr', 'class').should('contain', 'btn-primary');
        addCustomerPage.populateForm(firstName, lastName, postCode);
        addCustomerPage.addCustomerButton.click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('Customer added successfully with customer id');
            return true;
        });
    })
});