describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://bumbleveee.github.io/Jatek_M_V/')
  })
  /*it('kulcs alert', () => {
    cy.visit('https://bumbleveee.github.io/Jatek_M_V/')
    
    })*/
})

describe("Képek megjelenése", () => {

    beforeEach(() => {
        cy.visit("https://bumbleveee.github.io/Jatek_M_V/");
    });

    it("Karakter kép megjelenik", () => {

        cy.get(".karakter img")
            .should("exist");
    });

    it("Kulcs kép megjelenik", () => {

        cy.get(".kulcs img")
            .should("exist");
    });

    it("Ajtó kép megjelenik", () => {

        cy.get(".ajto img")
            .should("exist");
    });
});

