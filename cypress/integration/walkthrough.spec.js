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

  it('clicking "Lucky Dip" takes you to a random city page', () => {
    cy.get('button').contains('Lucky Dip').click();

    cy.url().should('include', '/cities/');
  });

  it('displays city page information', () => {
    cy.get('h1');
    cy.get('[data-cy=stats]').contains('Rating');
    cy.get('[data-cy=stats]').contains('Great for');

    cy.get('[data-cy=weather]').contains('Current Weather in');
    cy.get('[data-cy=weather]').contains('Conditions');
    cy.get('[data-cy=weather]').contains('Temp');
    cy.get('[data-cy=weather]').contains("Today's High");
    cy.get('[data-cy=weather]').contains("Today's Low");

    cy.get('[data-cy=city-back-button').contains('Back to');
    cy.get('[data-cy=country').click();

    cy.url().should('include', '/countries/');
  });

  it('displays countries page information', () => {
    cy.get('h1');
    cy.get('[data-cy=all-about]').contains('All About');

    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=home]').click();
  });
});
