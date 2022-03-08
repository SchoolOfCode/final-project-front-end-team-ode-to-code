describe('Beyonderbound Website Walkthrough', () => {
  it('Visits Beyonderbound', () => {
    cy.visit('localhost:3000');
  });

  it('clicks on "beyonderbound" logo', () => {
    cy.get('[data-cy=team-logo]').click();

    cy.url().should('include', 'http://localhost:3000/');
  });

  it('clicks on hamburger menu > "About us"', () => {
    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=about-link]').click();

    cy.get('body').contains('About Us');

    cy.url().should('include', '/about');
  });

  it('clicks "School of Code"', () => {
    cy.get('[data-cy=about-text-parent]').contains('School of Code').click();

    cy.url().should('include', 'schoolofcode.co.uk');

    cy.go('back');
  });

  it('clicks on hamburger menu > "Home"', () => {
    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=home]').click();

    cy.url().should('include', '/');
  });

  it('home contains expected headings and footer', () => {
    cy.get('body').contains('Find your next destination');

    cy.get('body').contains('Countries to discover...');

    cy.get('[data-cy=glass-section]').contains('Top 2022 Destinations');
    cy.get('[data-cy=glass-section]').contains('Travel Tips');
    cy.get('[data-cy=glass-section]').contains("Where's hot now?");

    cy.get('footer').contains('All rights reserved ©');
  });
});
