describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/countries/France");
    });

    it("should be present(country)", () => {
        cy.get('[data-cy=countries-link]').should('exist')
        });

      
        /// fetch cities API status
it("should fetch the countries infos", () => {
  // wrap null, so that you can use `then` to invoke a callback as an arbitrary command
  // and return a Cypress.Promise - so that cypress will wait on it's result
  // (or just use cy.request :))
        try {
          cy.request("http://localhost:3000/countries/France").then((req ,res) => {
          expect(req.status).to.eq(200)
          expect(req.isOkStatusCode).to.eq(true)
  })
        } catch (e) {
          console.log(e,'Error')
        }
    })
});