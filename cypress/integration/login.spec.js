/* eslint-disable jest/expect-expect */
describe('Login', () => {
  it('Logs in', () => {
    cy.visit('https://hot-ekspresso.vercel.app/');
    cy.get('#standard-adornment-username').type('admin');
    cy.get('#standard-adornment-password').type('1234');
    cy.get('#submit').click();
    cy.location('pathname').should('eq', '/tickets');
  });
});
