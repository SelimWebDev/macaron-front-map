/* ==== Test Created with Cypress Studio ==== */
it('test_filter', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/');
  cy.get('#district-select').select('75105');
  cy.get('#district-select').select('75117');
  cy.get('#district-select').find('option').its('length').should('eq', 21)
  /* ==== End Cypress Studio ==== */
});