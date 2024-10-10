import selectors from '../../Selectors/customersPageSelectors';

export default class CustomersPage {
    get searchField() {
        return cy.get(selectors.customerSearchField);
    }
    get table() {
        return cy.get(selectors.table);
    }
    rowCount() {
        return this.table.find('tbody tr').its('length');
    }
    getTextFromCell(row, column) {
        return this.table.find('tbody tr').eq(row).find('td').eq(column).invoke('text');
    }
    deleteCustomer(tableRow) {
        this.table.find('tbody tr').eq(tableRow).find('button').click();
    }
}