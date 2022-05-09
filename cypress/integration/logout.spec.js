/* eslint-disable jest/expect-expect */

describe('Logout', () => {
  it('Logs out', () => {
    cy.visit('https://hot-ekspresso.vercel.app/');
    cy.get('#standard-adornment-username').type('admin');
    cy.get('#standard-adornment-password').type('1234');
    cy.get('#submit').click();

    cy.location('pathname', { timeout: 60000 })
      .should('include', '/tickets');
    cy.get('[aria-label="account of current user"]').click();
    cy.contains('Logout').click();
    cy.location('pathname', { timeout: 60000 })
      .should('include', '/login');
  });
});
