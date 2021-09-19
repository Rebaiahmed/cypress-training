describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("http://localhost:4200/login");
  });

  it("should redirect to  Register page", () => {
    cy.get('.btn-link').click();
    cy.url().should('include', '/register')
  });
});
