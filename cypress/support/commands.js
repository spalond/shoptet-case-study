const filterInputSelector = ".parametric-filter input";

Cypress.Commands.add("setFilter", () => {
    cy.get(filterInputSelector).eq(0).click();
    cy.get(filterInputSelector).eq(0).should("be.checked");
    cy.get(filterInputSelector).eq(2).click();
    cy.get(filterInputSelector).eq(2).should("be.checked");
});
