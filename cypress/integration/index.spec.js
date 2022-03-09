describe('renders the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  //team logo
  it('should have the beyonderBound logo', () => {
    cy.get('[data-cy=team-logo]').should('exist');
  });

  // Header
  it('heading renders correctly', () => {
    cy.get('[data-cy=heading]').should('exist');
  });
  //Button
  it('button renders correctly', () => {
    cy.get('[data-cy=button]').should('exist');
  });

  it('button contain text ...', () => {
    cy.get('[data-cy=button]').contains('Lucky Dip');
  });

  it('button is clickable...', () => {
    cy.get('[data-cy=button]').click();
  });
  //Form
  it('should check the form', () => {
    cy.get('form').submit();
  });
  //Carousel
  it('should check the carousel parent', () => {
    cy.get('[data-cy=carousel]').parent();
  });

  it(' should check if carousel exist', () => {
    cy.get('[data-cy=carousel]').should('exist');
  });
  // Glass Section
  it('should check the glassSection parent', () => {
    cy.get('[data-cy=glass-section]').parent();
  });

  it(' should check if glass-section exist', () => {
    cy.get('[data-cy=glass-section]').should('exist');
  });
  // top destination glass
  it(' should check /top-destination', () => {
    cy.get('[data-cy=top-destination]').click();
    cy.url().should('eq', 'http://localhost:3000/top-destinations');
  });

  it(' should check /travel-tips', () => {
    cy.get('[data-cy=travel-tips]').click();
    cy.url().should('eq', 'http://localhost:3000/travel-tips');
  });

  it(' should check /feeling-hot', () => {
    cy.get('[data-cy=feeling-hot]').click();
    cy.url().should('eq', 'http://localhost:3000/feeling-hot');
  });

  // Text input is clear
  it(' should check if text input is clear', () => {
    cy.get('#input-text').clear();
  });
  /////////hamburger menu
  //Home link hamburger-menu
  it(' should check if home link on hamburger menu exist', () => {
    cy.get('[data-cy=home]').should('exist');
  });

  //About link hamburger-menu
  it(' should check if about link on hamburger menu exist', () => {
    cy.get('[data-cy=about-link]').should('exist');
  });
});
