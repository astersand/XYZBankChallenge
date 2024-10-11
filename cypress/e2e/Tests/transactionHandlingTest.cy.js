import customerSelectionPage from "../Pages/Customer Pages/customerSelectionPage";
import TransactionsPage from "../Pages/Customer Pages/transactionsPage";
import env from '../../config/environments';
import dayjs from "dayjs";

describe('Transaction handling test', () => {
    const today = dayjs().format('YYYY-MM-DDT00:00:00');
    const customerPage = new customerSelectionPage();
    const transactionPage = new TransactionsPage();
    before('Open customer page', () => {
        cy.intercept('GET', `${env.baseURL}/customerView.html`).as('customerPage');
        cy.intercept('GET', `${env.baseURL}/account.html`).as('account');
        cy.visit(`${env.baseURL}/#/customer`);
        cy.wait('@customerPage');
        customerPage.customerSelection.select('Hermoine Granger');
        customerPage.loginButton.click();
        cy.wait('@account');
    });

    it('Hermoine Granger should be logged in', () => {
        transactionPage.clientName.should('have.text', 'Hermoine Granger');
    });
    it('Hermoine should have three accounts', () => {
        transactionPage.clientAccountSelection.find('option').should('have.length', 3);
    });
    it('First account details should be displayed', () => {
        transactionPage.accountNumberLabel.should('contain.text', '1001');
        transactionPage.balanceLabel.should('have.text', '5096');
        transactionPage.currencyLabel.should('have.text', 'Dollar');
    });
    it('First account details should be displayed', () => {
        transactionPage.clientAccountSelection.select('1002');
        transactionPage.accountNumberLabel.should('contain.text', '1002');
        transactionPage.balanceLabel.should('have.text', '0');
        transactionPage.currencyLabel.should('have.text', 'Pound');
    });
    it('First account details should be displayed', () => {
        transactionPage.clientAccountSelection.select('1003');
        transactionPage.accountNumberLabel.should('contain.text', '1003');
        transactionPage.balanceLabel.should('have.text', '0');
        transactionPage.currencyLabel.should('have.text', 'Rupee');
    });
    it('Should not allow withdrawl of more money than available', () => {
        transactionPage.withdrawlButton.click();
        transactionPage.withdrawAmount.click().type('1000');
        transactionPage.submitDepositButton.click();
        transactionPage.confirmationMessage.should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
    });

    it('Should deposit money', () => {
        transactionPage.depositButton.click();
        transactionPage.clientAccountSelection.select('1003');
        transactionPage.depositAmount.should('have.attr', 'required');
        transactionPage.depositAmount.type('100');
        transactionPage.submitDepositButton.click();
        transactionPage.confirmationMessage.should('have.text', 'Deposit Successful');
        transactionPage.balanceLabel.should('have.text', '100');
    });

    it('Should withdraw money', () => {
        transactionPage.withdrawlButton.click();
        transactionPage.clientAccountSelection.select('1003');
        transactionPage.withdrawAmount.should('have.attr', 'required');
        transactionPage.withdrawAmount.type('50');
        transactionPage.submitDepositButton.click();
        transactionPage.confirmationMessage.should('have.text', 'Transaction successful');
        transactionPage.balanceLabel.should('have.text', '50');
    });

    it('Should display transaction history', () => {
        transactionPage.clientAccountSelection.select('1001');
        transactionPage.transactionsButton.click();
        transactionPage.getTableRowsCount().should('eq', 392);
    });
});