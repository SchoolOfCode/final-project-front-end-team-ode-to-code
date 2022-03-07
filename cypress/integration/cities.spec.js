describe("renders a cities page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/cities/Florence");
    });

///should be clickable
    it.skip("should be clickable", () => {
        cy.get('[data-cy=city-back-button]').click();
        });
///css check
        it.skip("should have css margin", () => {
            cy.get('[data-cy=city-description]').should("have.css","margin")
            });
});