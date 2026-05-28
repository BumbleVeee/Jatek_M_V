describe('Window alert tesztek - Bernáth Milán', () => {
  beforeEach(() => {
    cy.visit('https://bumbleveee.github.io/Jatek_M_V/')
  })
  
  it('passes', () => {})
  it('Kulcs felvéve alert tesztelése', () => {

    cy.get('.karakter').trigger('keydown', { key: 'ArrowRight', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10); 
      expect(jelenlegiX).to.be.at.least(650); 
    });

    cy.get('.karakter').trigger('keyup', { key: 'ArrowRight', force: true });
    cy.wait(1000);
    cy.get('.karakter').trigger('keydown', { key: 'ArrowDown', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiY = parseInt($div.css('top'), 10); 
      expect(jelenlegiY).to.be.at.least(380); 
    });
    cy.get('.karakter').trigger('keyup', { key: 'ArrowDown', force: true });
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Kulcs felvéve!')
    })
  })

  it('Ajtó kinyitva alert tesztelése', () => {    
    cy.get('.karakter').trigger('keydown', { key: 'ArrowRight', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10); 
      expect(jelenlegiX).to.be.at.least(650); 
    });
    cy.get('.karakter').trigger('keyup', { key: 'ArrowRight', force: true });

    cy.get('.karakter').trigger('keydown', { key: 'ArrowDown', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiY = parseInt($div.css('top'), 10); 
      expect(jelenlegiY).to.be.at.least(380); 
    });
    cy.get('.karakter').trigger('keyup', { key: 'ArrowDown', force: true });
    
    cy.get('.karakter').trigger('keydown', { key: 'ArrowLeft', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10); 
      expect(jelenlegiX).to.be.at.most(350); 
    });
    cy.get('.karakter').trigger('keyup', { key: 'ArrowLeft', force: true });

    cy.get('.karakter').trigger('keydown', { key: 'ArrowUp', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiY = parseInt($div.css('top'), 10);
      expect(jelenlegiY).to.be.at.most(70);
    });
    cy.get('.karakter').trigger('keyup', { key: 'ArrowUp', force: true });

    let alertSzamlalo = 0;
    
    cy.on('window:alert', (text) => {
      alertSzamlalo++;
      if (alertSzamlalo === 1) {
        expect(text).to.equal('Kulcs felvéve!')
      } else if (alertSzamlalo === 2) {
        expect(text).to.equal('Ajtó kinyitva! Kijutottál a szobából!')
      }
    })
  })

  it('WASD mozgás teszt', () => {
    cy.get('.karakter').trigger('keydown', { key: 's', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiY = parseInt($div.css('top'), 10);
      expect(jelenlegiY).to.be.at.least(250);
    });
    cy.get('.karakter').trigger('keyup', { key: 's', force: true });
    
    cy.get('.karakter').trigger('keydown', { key: 'w', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiY = parseInt($div.css('top'), 10);
      expect(jelenlegiY).to.be.at.most(150);
    });
    cy.get('.karakter').trigger('keyup', { key: 'w', force: true });

    cy.get('.karakter').trigger('keydown', { key: 'd', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10);
      expect(jelenlegiX).to.be.at.least(200);
    });
    cy.get('.karakter').trigger('keyup', { key: 'd', force: true });

    cy.get('.karakter').trigger('keydown', { key: 'a', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10);
      expect(jelenlegiX).to.be.at.most(100);
    });
    cy.get('.karakter').trigger('keyup', { key: 'a', force: true });
  })
})

describe("Képek megjelenése teszt - Gubek Veronika", () => {

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