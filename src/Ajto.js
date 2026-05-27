/**
 * Az Ajtó objektumot reprezentáló osztály.
 * Kezeli az ajtó állapotát, pozícióját és vizuális megjelenítését.
 */
export default class Ajto {
    // Privát adattagok (csak az osztályon belülről érhetőek el)
    #nyitva;
    #pozicio;

    /**
     * @param {number} x - Az ajtó X koordinátája
     * @param {number} y - Az ajtó Y koordinátája
     * @param {string} kep - Az ajtó képének elérési útja
     */
    
    constructor(x, y, kep = "") {
        this.#nyitva = false; // Alapértelmezetten az ajtó zárva van
        this.#pozicio = {x: x, y : y}; // Pozíció tárolása objektumként
        this.kep = kep; // Kép elérési útja

        // A DOM elem létrehozása és CSS osztállyal való ellátása
        this.elem = document.createElement("div");
        this.elem.classList.add("ajto");
    }

    /**
     * Pozíció getter, hogy kívülről is leolvasható legyen a privát koordináta.
     */
    get pozicio() {
        return this.#pozicio;
    }

    /**
     * Megjeleníti az ajtót a kapott szülő elemen belül.
     * @param {HTMLElement} szulo - A játéktér HTML eleme
     */
    megjelenit(szulo) {
        // Kép beszúrása a div-be
        this.elem.innerHTML = `<img src="${this.kep}">`;

        // CSS stílusok (pozíció) frissítése
        this.frissit();

        // Hozzáadás a HTML-hez
        szulo.appendChild(this.elem);
    }

    /**
     * Frissíti az ajtó grafikai pozícióját és állapotát a képernyőn.
     */
    frissit() {
        // Abszolút pozicionálás beállítása pixelben
        this.elem.style.left = `${this.#pozicio.x}px`;
        this.elem.style.top = `${this.#pozicio.y}px`;

        // Ha az ajtó nyitva van, megkapja a "nyitva" CSS osztályt
        if (this.#nyitva) {
            this.elem.classList.add("nyitva");
        }
    }

    /**
     * Az ajtó állapotát nyitottra változtatja.
     */
    kinyit() {
        this.#nyitva = true;
    }

}