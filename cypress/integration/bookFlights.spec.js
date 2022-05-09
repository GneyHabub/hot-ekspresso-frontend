describe('Booking', () => {
  // eslint-disable-next-line jest/expect-expect
  it('Booking', () => {
    cy.visit('https://hot-ekspresso.vercel.app/');
    cy.get('#standard-adornment-username').type('admin');
    cy.get('#standard-adornment-password').type('1234');
    cy.get('#submit').click();
    cy.location('pathname').should('eq', '/tickets');
    cy.contains('Create a booking').click();
    cy.get('input').eq(0).type('KZN');
    cy.contains('KZN - Kazan').click();
    cy.get('input').eq(1).type('DME');
    cy.contains('DME - Moscow').click();
    cy.contains('Search flights').click();
    cy.get('.MuiAccordion-root').its('length').should('eq', 3);
  });
});
