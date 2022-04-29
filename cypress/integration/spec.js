/* eslint-disable jest/expect-expect */
describe('Hot Ekspresso Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://hot-ekspresso.vercel.app/');

    cy.get('button').click();
  });
});
