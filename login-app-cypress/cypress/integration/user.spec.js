describe("User", () => {
  it("should register user", () => {
    cy.visit("/register");
    cy.get('#firstName').type('Michael');
cy.get('#lastName').type('K');
cy.get('#username').type('mk');
cy.get('#password').type('qwerty');
cy.get('.btn-primary').click();
cy.get('#password').type('qwerty{enter}');
cy.url().should('include', '/login');
cy.get('.alert').should('contain', 'successful')
  });
})


describe("Login User", () => {
beforeEach( ()=>{
  cy.fixture('users').then((users) => {
    localStorage.setItem('users', JSON.stringify(users));
  });
}

)

it("should login succesfuly", () => {
  cy.visit("/login");
    cy.get('#username').type(Cypress.config('username'));
    cy.get('#password').type(Cypress.config('password'));
    cy.get('[data-cy=login]').click();
    cy.get('h1').should('contain', 'Hi Michael');
});
})



