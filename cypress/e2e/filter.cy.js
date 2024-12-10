const clothesPage = "/obleceni/";
const productSelector = '[data-testid="productItem"]';

describe("Category filter interaction", () => {
  it("Query params get updated", () => {
    cy.visit(clothesPage);
    cy.url().should("not.include", "?");
    cy.setFilter();
    cy.url().should("include", "?dd=1,3", "URL does not contain filter params");
  });

  it("Filter shows right results", () => {
    cy.visit(clothesPage);
    cy.get(productSelector)
      .its("length")
      .should("be.gt", 1, "Product grid should have more than one item");
    cy.setFilter();
    cy.get(productSelector)
      .its("length")
      .should("equal", 1, "After using filter only one product should remain");
  });
});
