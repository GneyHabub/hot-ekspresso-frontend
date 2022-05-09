/* eslint-disable jest/expect-expect */
describe('Hot Ekspresso Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://hot-ekspresso.vercel.app/');
    cy.get('#standard-adornment-username').type('admin');
    cy.get('#standard-adornment-password').type('1234');
    cy.get('#submit').click();
  });
});
