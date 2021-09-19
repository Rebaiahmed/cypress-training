describe("Home pqge tetsing ", () => {
  beforeEach( ()=>{
    cy.login();
  }

  )


  it("should visit Home page page", () => {
    cy.visit("http://localhost:4200/home");
  });
});
