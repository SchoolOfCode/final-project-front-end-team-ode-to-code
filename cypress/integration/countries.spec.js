describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/countries/France");
    });

    it("should be present(country)", () => {
        cy.get('[data-cy=countries-link]').should('exist')
        });

      
        /// fetch cities API status
it("should check  country request status for Mexico link", () => {
  // wrap null, so that you can use `then` to invoke a callback as an arbitrary command
  // and return a Cypress.Promise - so that cypress will wait on it's result
  // (or just use cy.request :))
        try {
          cy.request("http://localhost:3000/countries/Mexico").then((req ,res) => {
          expect(req.status).to.eq(200)
          expect(req.isOkStatusCode).to.eq(true)
  })
        } catch (e) {
          console.log(e,'Error')
        }
    })

////unit test Api
    it("should check Mexico values", async() => {
      const result =  await fetch(`https://four-week-project.herokuapp.com/countries/?name=Mexico`);
      const countrydata =  await result.json();

      expect(countrydata.payload).to.be.a('array') 
      expect(countrydata.payload[0].continent).to.eq('South America')
      expect(countrydata.payload[0].country).to.eq('Mexico')
      expect(countrydata.payload[0].cities.length).to.eq(3)
      expect(countrydata.payload[0].image).to.be.a('string') 
      expect(countrydata.payload[0].country_description).to.be.a('string') 
  })

});