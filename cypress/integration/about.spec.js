// about.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('check about page', () => {
  it('Should  render the about page', () => {
    cy.visit('http://localhost:3000/about');
  });

  describe('Team name ', () => {
    it('should contain the Team name', () => {
      cy.get('[data-cy=about-title]').contains('Team Ode to Code');
    });
  });

  describe('Children presence', () => {
    it('should contain  unorder list and paragraph as children element', () => {
      cy.get('[data-cy=about-text-parent]').children('p');
      cy.get('[data-cy=about-text-parent]').children('ul');
    });
  });
});
