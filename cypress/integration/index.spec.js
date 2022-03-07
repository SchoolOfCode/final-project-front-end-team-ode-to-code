describe("renders the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
//team logo
    it("should have the beyonderBound logo", () => {
      cy.get('[data-cy=team-logo]').should("exist");
      
      });

// Header
    it("heading renders correctly", () => {
      cy.get('[data-cy=heading]').should("exist");
      
      });
//Button
      it("button renders correctly", () => {
        cy.get('[data-cy=button]').should("exist");
        });

      it("button contain text ...", () => {
            cy.get('[data-cy=button]').contains('Lucky Dip');
            });
//Form
      it("should check the form", () => {
        cy.get('form').submit()
          });    
//Carousel
      it("should check the carousel parent", () => {
        cy.get('[data-cy=carousel]').parent()
          });      
                  
      it(" should check if carousel exist", () => {
        cy.get('[data-cy=carousel]').should("exist");
         });
// Glass Section     
      it("should check the glassSection parent", () => {
        cy.get('[data-cy=glass-section]').parent()
          });

      it(" should check if glass-section exist", () => {
        cy.get('[data-cy=glass-section]').should("exist");
            });

// Text input is clear
      it(" should check if text input is clear", () => {
        cy.get('#input-text').clear()
            });
/////////hamburger menu
//Home link hamburger-menu
it(" should check if home link on hamburger menu exist", () => {
  cy.get('[data-cy=home]').should('exist')
  
      });

//About link hamburger-menu
it(" should check if about link on hamburger menu exist", () => {
  cy.get('[data-cy=about-link]').should('exist')
      });

});



    



    

