describe('Beyonderbound Website Walkthrough', () => {
  it('Visits Beyonderbound', () => {
    cy.visit('localhost:3000');
  });

  it('clicks on "beyonderbound" logo to go home', () => {
    cy.get('[data-cy=team-logo]').click();

    cy.url().should('include', 'http://localhost:3000/');
  });

  it('clicks on hamburger menu "About us" option to go to About us', () => {
    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=about-link]').click();

    cy.get('body').contains('About Us');

    cy.url().should('include', '/about');
  });

  it('clicks "School of Code link to go to SoC website"', () => {
    cy.get('[data-cy=about-text-parent]').contains('School of Code').click();

    cy.url().should('include', 'schoolofcode.co.uk');

    cy.go('back');
  });

  it('clicks on hamburger menu "Home" option to go to homepage', () => {
    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=home]').click();

    cy.url().should('include', '/');
  });

  it('contains expected headings and footer on homepage', () => {
    cy.get('body').contains('Find your next destination');

    cy.get('body').contains('Countries to discover...');

    cy.get('[data-cy=glass-section]').contains('Top 2022 Destinations');
    cy.get('[data-cy=glass-section]').contains('Travel Tips');
    cy.get('[data-cy=glass-section]').contains("Where's hot now?");

    cy.get('footer').contains('All rights reserved ©');
  });

  it('clicks "Lucky Dip" to take to a random city page', () => {
    cy.get('button').contains('Lucky Dip').click();

    cy.url().should('include', '/cities/');
  });

  it('displays correct city page information', () => {
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

  it('displays correct countries page information', () => {
    cy.get('h1');
    cy.get('[data-cy=all-about]').contains('All About');

    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=home]').click();
  });

  it('uses the search input to find the Paris page', () => {
    cy.get('[data-cy=search-input]')
      .type('Paris')
      .should('have.value', 'Paris');

    cy.get('[data-cy=search-results]').contains('Paris').click();

    cy.url().should('include', '/cities/Paris');
  });

  it('displays relevant information on the Paris page', () => {
    cy.get('[data-cy=page-title]').contains('Paris');

    cy.get('[type="checkbox"]').check();

    cy.get('[data-cy=home]').click();
  });

  it('uses the search input to find Paris a number of different ways', () => {
    cy.get('[data-cy=search-input]')
      .type('France')
      .should('have.value', 'France');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('eiffel tower')
      .should('have.value', 'eiffel tower');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('families')
      .should('have.value', 'families');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('solo')
      .should('have.value', 'solo');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('city')
      .should('have.value', 'city');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('romance')
      .should('have.value', 'romance');
    cy.get('[data-cy=search-results]').contains('Paris');

    cy.get('[data-cy=search-input]')
      .clear()
      .type('££')
      .should('have.value', '££');
    cy.get('[data-cy=search-results]').contains('Paris');
  });

  it('displays "Top 2022 Destinations" page on click', () => {
    cy.get('[data-cy=glass-section]').contains('Top 2022 Destinations').click();

    cy.url().should('include', '/top-destinations');

    cy.get('h1').contains('Top 2022 Destinations');

    cy.go('back');
  });

  it('displays "Travel Tips" page on click', () => {
    cy.get('[data-cy=glass-section]').contains('Travel Tips').click();

    cy.url().should('include', '/travel-tips');

    cy.get('h1').contains('Travel Tips');

    cy.go('back');
  });

  it('displays "Wheres hot now?" page on click', () => {
    cy.get('[data-cy=glass-section]').contains("Where's hot now?").click();

    cy.url().should('include', '/feeling-hot');

    cy.get('h1').contains("Where's hot now?");

    cy.go('back');
  });
});
