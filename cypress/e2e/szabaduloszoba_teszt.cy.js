describe("Tesztek - Bernáth Milán", () => {
  beforeEach(() => {
    cy.visit('https://bumbleveee.github.io/Jatek_M_V/')
  });
  
  it('passes', () => {});

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
  });

  it('A mozog class-t megkapja-e a karakter div', () => {
    cy.get('.karakter').trigger('keydown', { key: 'd', force: true });
    cy.get('.karakter').should(($div) => {
      expect($div).to.have.class('mozog');
      const jelenlegiX = parseInt($div.css('left'), 10);
      expect(jelenlegiX).to.be.at.least(500);
    });
    cy.get('.karakter').trigger('keyup', { key: 'd', force: true });
    cy.wait(1000);
    cy.get('.karakter').should('not.have.class', 'mozog');
  });

  it('Kulcs felvéve alert tesztelése', () => {

    cy.get('.karakter').trigger('keydown', { key: 'ArrowRight', force: true });
    cy.get('.karakter').should(($div) => {
      const jelenlegiX = parseInt($div.css('left'), 10); 
      expect(jelenlegiX).to.be.at.least(650); 
    });

    cy.get(".karakter").trigger("keyup", { key: "ArrowRight", force: true });
    cy.wait(1000);
    cy.get(".karakter").trigger("keydown", { key: "ArrowDown", force: true });
    cy.get(".karakter").should(($div) => {
      const jelenlegiY = parseInt($div.css("top"), 10);
      expect(jelenlegiY).to.be.at.least(380);
    });
    cy.get(".karakter").trigger("keyup", { key: "ArrowDown", force: true });
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Kulcs felvéve!");
    });
  });

  it("Ajtó kinyitva alert tesztelése", () => {
    cy.get(".karakter").trigger("keydown", { key: "ArrowRight", force: true });
    cy.get(".karakter").should(($div) => {
      const jelenlegiX = parseInt($div.css("left"), 10);
      expect(jelenlegiX).to.be.at.least(650);
    });
    cy.get(".karakter").trigger("keyup", { key: "ArrowRight", force: true });

    cy.get(".karakter").trigger("keydown", { key: "ArrowDown", force: true });
    cy.get(".karakter").should(($div) => {
      const jelenlegiY = parseInt($div.css("top"), 10);
      expect(jelenlegiY).to.be.at.least(380);
    });
    cy.get(".karakter").trigger("keyup", { key: "ArrowDown", force: true });

    cy.get(".karakter").trigger("keydown", { key: "ArrowLeft", force: true });
    cy.get(".karakter").should(($div) => {
      const jelenlegiX = parseInt($div.css("left"), 10);
      expect(jelenlegiX).to.be.at.most(350);
    });
    cy.get(".karakter").trigger("keyup", { key: "ArrowLeft", force: true });

    cy.get(".karakter").trigger("keydown", { key: "ArrowUp", force: true });
    cy.get(".karakter").should(($div) => {
      const jelenlegiY = parseInt($div.css("top"), 10);
      expect(jelenlegiY).to.be.at.most(70);
    });
    cy.get(".karakter").trigger("keyup", { key: "ArrowUp", force: true });

    let alertSzamlalo = 0;

    cy.on("window:alert", (text) => {
      alertSzamlalo++;
      if (alertSzamlalo === 1) {
        expect(text).to.equal("Kulcs felvéve!");
      } else if (alertSzamlalo === 2) {
        expect(text).to.equal("Ajtó kinyitva! Kijutottál a szobából!");
      }
    });
  });
});

describe("Tesztek - Gubek Veronika", () => {
  beforeEach(() => {
    cy.visit("https://bumbleveee.github.io/Jatek_M_V/");
  });

  it("Képek megjelennek", () => {
    cy.get(".karakter img").should("exist");

    cy.get(".kulcs img").should("exist");

    cy.get(".ajto img").should("exist");

    cy.get("#jatekter img").should("exist");
  });

  it("↑ ↓ → ← nyilak mozgás teszt", () => {
    // FEL nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "ArrowUp", force: true });
    // Ellenőrizzük, hogy a karakter feljebb ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális Y pozíciót
      const jelenlegiY = parseInt($div.css("top"), 10);
      // A karakter maximum 150px magasan legyen
      expect(jelenlegiY).to.be.at.most(100);
    });
    // FEL nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowUp", force: true });

    // LE nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "ArrowDown", force: true });
    // Ellenőrizzük, hogy a karakter lejjebb ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk a jelenlegi Y pozíciót
      const jelenlegiY = parseInt($div.css("top"), 10);
      // A karakter legalább 250px mélyen legyen
      expect(jelenlegiY).to.be.at.least(300);
    });
    // LE nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowDown", force: true });

    // JOBB nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "ArrowRight", force: true });
    // Ellenőrizzük, hogy a karakter jobbra ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális X pozíciót
      const jelenlegiX = parseInt($div.css("left"), 10);
      // A karakter legalább 200px-re legyen balról
      expect(jelenlegiX).to.be.at.least(250);
    });
    // JOBB nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowRight", force: true });

    // BAL nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "ArrowLeft", force: true });
    // Ellenőrizzük, hogy a karakter balra ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális X pozíciót
      const jelenlegiX = parseInt($div.css("left"), 10);
      // A karakter maximum 100px-re legyen balról
      expect(jelenlegiX).to.be.at.most(50);
    });
    // BAL nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowLeft", force: true });
  });

  it("WSDA nagybetűs nyilak mozgás teszt", () => {
    // FEL nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "W", force: true });
    // Ellenőrizzük, hogy a karakter feljebb ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális Y pozíciót
      const jelenlegiY = parseInt($div.css("top"), 10);
      // A karakter maximum 150px magasan legyen
      expect(jelenlegiY).to.be.at.most(100);
    });
    // FEL nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "W", force: true });

    // LE nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "S", force: true });
    // Ellenőrizzük, hogy a karakter lejjebb ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk a jelenlegi Y pozíciót
      const jelenlegiY = parseInt($div.css("top"), 10);
      // A karakter legalább 250px mélyen legyen
      expect(jelenlegiY).to.be.at.least(300);
    });
    // LE nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "S", force: true });

    // JOBB nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "D", force: true });
    // Ellenőrizzük, hogy a karakter jobbra ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális X pozíciót
      const jelenlegiX = parseInt($div.css("left"), 10);
      // A karakter legalább 200px-re legyen balról
      expect(jelenlegiX).to.be.at.least(250);
    });
    // JOBB nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "D", force: true });

    // BAL nyíl lenyomás szimulálása
    cy.get(".karakter").trigger("keydown", { key: "A", force: true });
    // Ellenőrizzük, hogy a karakter balra ment-e
    cy.get(".karakter").should(($div) => {
      // Kiolvassuk az aktuális X pozíciót
      const jelenlegiX = parseInt($div.css("left"), 10);
      // A karakter maximum 100px-re legyen balról
      expect(jelenlegiX).to.be.at.most(50);
    });
    // BAL nyíl felengedése
    cy.get(".karakter").trigger("keyup", { key: "A", force: true });
  });

  it("Kulcs felvétele után eltűnik", () => {
    // JOBBRA mozgás
    cy.get(".karakter").trigger("keydown", { key: "ArrowRight", force: true, });

    // Ellenőrizzük, hogy eljutott jobbra
    cy.get(".karakter").should(($div) => {
      const jelenlegiX = parseInt($div.css("left"), 10);
      expect(jelenlegiX).to.be.at.least(650);
    });

    // JobbGomb felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowRight", force: true, });

    // Várunk 1000ms-t
    cy.wait(1000);

    // LE mozgás
    cy.get(".karakter").trigger("keydown", { key: "ArrowDown", force: true, });

    // Ellenőrizzük, hogy lement
    cy.get(".karakter").should(($div) => {
      const jelenlegiY = parseInt($div.css("top"), 10);
      expect(jelenlegiY).to.be.at.least(380);
    });

    // LeGomb felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowDown", force: true, });

    // Várunk 1000ms-t
    cy.wait(1000);

    // FEL mozgás
    cy.get(".karakter").trigger("keydown", { key: "ArrowUp", force: true, });

    // Ellenőrizzük, hogy feljebb ment
    cy.get(".karakter").should(($div) => {
      const jelenlegiY = parseInt($div.css("top"), 10);
      expect(jelenlegiY).to.be.at.most(280);
    });

    // FelGomb felengedése
    cy.get(".karakter").trigger("keyup", { key: "ArrowUp", force: true, });

    // Ellenőrizzük, hogy a kulcs eltűnt-e
    cy.get(".kulcs").should("not.exist");
  });
});
