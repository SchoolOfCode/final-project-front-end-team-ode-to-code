

describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/cities/Paris");
    });

///should be clickable
    it("should be clickable", () => {
        cy.get('[data-cy=city-back-button]').click();
        });
///css check
        it("should have css margin", () => {
            cy.get('[data-cy=city-description]').should("have.css","margin")
            });
            
/// fetch cities API status
it("should check API request for Paris", () => {

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

///Unit test APi
  it("should fetch the cities values for Paris", async() => {
          const result =  await fetch(`https://four-week-project.herokuapp.com/cities/?name=Paris`);
          const citydata =  await result.json();
  
          expect(citydata.payload[0].city_name).to.eq('Paris')
          expect(citydata.payload[0].country).to.eq('France')
          expect(citydata.payload[0].continent).to.eq('Europe')
          expect(citydata.payload[0].holiday_type).to.eq('city break')
          expect(citydata.payload[0].rating).to.eq(5)
          expect(citydata.payload[0].tags.length).to.eq(5)
          expect(citydata.payload[0].tags).to.be.a('array')
          expect(citydata.payload[0].image).to.be.a('string')
      })
});