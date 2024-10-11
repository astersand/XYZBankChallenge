import transactionsPageSelectors from "../../Selectors/transactionsPageSelectors";
export default class TransactionsPage {
    get clientName() {
        return cy.get(transactionsPageSelectors.clientName);
    }
    get clientAccountSelection() {
        return cy.get(transactionsPageSelectors.clientAccountSelection, {timeout: 5000});
    }
    get accountNumberLabel() {
        return cy.get(transactionsPageSelectors.accountNumberLabel);
    }
    get balanceLabel() {
        return cy.get(transactionsPageSelectors.balanceLabel);
    }
    get currencyLabel() {
        return cy.get(transactionsPageSelectors.currencyLabel);
    }
    get transactionsButton() {
        return cy.get(transactionsPageSelectors.transactionsButton);
    }
    get depositButton() {
        return cy.get(transactionsPageSelectors.depositButton);
    }
    get withdrawlButton() {
        return cy.get(transactionsPageSelectors.withdrawlButton);
    }
    get withdrawAmount() {
        cy.get(transactionsPageSelectors.withdrawAmount, {timeout: 5000}).should('be.visible');
        return cy.get(transactionsPageSelectors.withdrawAmount);
    }
    get depositAmount() {
        cy.get(transactionsPageSelectors.depositAmount, {timeout: 2000}).should('be.visible');
        return cy.get(transactionsPageSelectors.depositAmount);
    }
    get submitDepositButton() {
        return cy.get(transactionsPageSelectors.submitDepositButton);
    }
    get confirmationMessage() {
        return cy.get(transactionsPageSelectors.confirmationMessage, {timeout: 5000});
    }
    get withdrawButton() {
        return cy.get(transactionsPageSelectors.submitDepositButton);
    }
    get table() {
        return cy.get(transactionsPageSelectors.table);
    }
    get backButton() {
        return cy.get(transactionsPageSelectors.backButton);
    }
    get resetButton() {
        return cy.get(transactionsPageSelectors.resetButton);
    }
    get startDate() {
        return cy.get(transactionsPageSelectors.startDate);
    }
    get endDate() {
        return cy.get(transactionsPageSelectors.endDate);
    }
    getTableRowsCount() {
        return cy.get(transactionsPageSelectors.table).find('tbody tr').its('length');
    }
    getTableCellValue(rowIndex, columnIndex) {
        return cy.get(transactionsPageSelectors.table).find('tbody tr').eq(rowIndex).find('td').eq(columnIndex).invoke('text');
    }
}