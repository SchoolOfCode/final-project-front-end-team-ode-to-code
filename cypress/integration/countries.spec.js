describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/countries/France");
    });

    it("should be present(country)", () => {
        cy.get('[data-cy=countries-link]').should('exist')
        });

      
});