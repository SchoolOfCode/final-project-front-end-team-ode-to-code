

describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/cities/Paris");
    });

///should be clickable
    it.skip("should be clickable", () => {
        cy.get('[data-cy=city-back-button]').click();
        });
///css check
        it("should have css margin", () => {
            cy.get('[data-cy=city-description]').should("have.css","margin")
            });
            
/// fetch cities API status
it.skip("should fetch the cities infos", () => {
// wrap null, so that you can use `then` to invoke a callback as an arbitrary command
// and return a Cypress.Promise - so that cypress will wait on it's result
// (or just use cy.request :))
      try {
        cy.request("GET","http://localhost:3000/cities/Paris").then((req ,res) => {
        expect(req.status).to.eq(200)
        expect(req).to.be.an('object')
        expect(req).to.have.property('headers')
        expect(req.isOkStatusCode).to.eq(true)   
})
      } catch (e) {
        console.log(e,'Error')
      }
  })
});