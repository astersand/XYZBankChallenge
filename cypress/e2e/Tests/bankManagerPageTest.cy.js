import AddCustomerPage from '../Pages/addCustomerPage';
import BankManagerHomepage from '../Pages/bankManagerHomePage';
import Homepage from '../Pages/homepage';
import { faker } from '@faker-js/faker';
import OpenAccountPage from '../Pages/openAccountPage';
import CustomersPage from '../Pages/customersPage';
import env from '../../config/environments';

describe('Bank manager page test', () => {
    const homepage = new Homepage();
    const bankManagerHomepage = new BankManagerHomepage();
    const addCustomerPage = new AddCustomerPage();
    const openAccountPage = new OpenAccountPage();
    const customersPage = new CustomersPage();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postCode = faker.location.zipCode();
    let accountNumber;
    before('Open homepage', () => {
        cy.intercept('GET',`${env.baseURL}/options.html`).as('homepage');
        cy.visit(`${env.baseURL}/#/login`);
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
    it('Should create account', () => {
        bankManagerHomepage.openAccountButton.click();
        openAccountPage.customer.select(`${firstName} ${lastName}`);
        openAccountPage.currency.select('Dollar');
        openAccountPage.processButton.click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('Account created successfully with account Number');
            accountNumber = alertText.split(' :')[1];
            return true;
        });
    });
    it('Should search for customers succesfully', () => {
        bankManagerHomepage.customersButton.click();
        customersPage.searchField.type(lastName);
        customersPage.rowCount().should('eq', 1);
        customersPage.getTextFromCell(0, 0).should('eq', firstName);
        customersPage.getTextFromCell(0, 1).should('eq', lastName);
        customersPage.getTextFromCell(0, 2).should('eq', postCode);
        customersPage.getTextFromCell(0, 3).should('contains', accountNumber);
        customersPage.searchField.clear();
    });
    it('Should delete the customer', () => {
        customersPage.searchField.type(lastName);
        customersPage.deleteCustomer(0);  
        customersPage.searchField.clear();
        customersPage.rowCount().should('eq', 5);
    });
});