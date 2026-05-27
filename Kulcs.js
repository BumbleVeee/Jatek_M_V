/**
 * A Kulcs objektumot reprezentáló osztály.
 * A karakter fel tudja venni, hogy kinyithassa vele az ajtót.
 */
export default class Kulcs {

    /**
     * @param {number} x - Kezdő X koordináta
     * @param {number} y - Kezdő Y koordináta
     * @param {string} kep - A kulcs képe
     * @param {number} szelesseg - A kulcs szélessége pixelben
     * @param {number} magassag - A kulcs magassága pixelben
     */
    constructor(x, y, kep = "", szelesseg = 32, magassag = 32) {

        this.tipus = "kulcs"; // Az objektum típusának azonosítója

        this.pozicio = {
            x, y
        };

        this.meret = {
            szelesseg,
            magassag
        };

        this.kep = kep;

        this.felveheto = true; // Jelzi, hogy a kulcs még a földön van-e

        // DOM elem létrehozása és osztályozása
        this.elem = document.createElement("div");
        this.elem.classList.add("kulcs");
    }

    /**
     * Megjeleníti a kulcsot a játéktéren.
     * @param {HTMLElement} szulo - A szülő HTML elem
     */
    megjelenit(szulo){
        this.elem.innerHTML = `<img src="${this.kep}">`;
        this.frissit();
        szulo.appendChild(this.elem);
    }

    /**
     * Aktualizálja a kulcs elhelyezkedését a DOM-ban.
     */
    frissit() {

        this.elem.style.left = `${this.pozicio.x}px`;
        this.elem.style.top = `${this.pozicio.y}px`;
    }

    /**
     * Logikailag és vizuálisan is eltávolítja a kulcsot a pályáról felvételkor.
     */
    felvesz() {
        this.felveheto = false;
        this.elem.remove();
    }

}