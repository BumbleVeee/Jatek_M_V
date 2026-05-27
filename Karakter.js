/**
 * A játékost/karaktert reprezentáló osztály.
 * Mozog a pályán, és van egy hátizsákja a felvett tárgyaknak.
 */
export default class Karakter {
    // Privát adattagok az adatok védelmére
    #pozicio = {};
    #hatizsak;

    /**
     * @param {string} nev - A karakter neve
     * @param {number} x - Kezdő X koordináta
     * @param {number} y - Kezdő Y koordináta
     * @param {string} kep - A karakter grafikája
     */
    constructor(nev, x, y, kep = "") {
        this.nev = nev;
        this.#pozicio = {x: x, y : y};
        this.#hatizsak = []; // Üres tömbbel indul a táska
        this.kep = kep;

        // DOM elem előkészítése
        this.elem = document.createElement("div");
        this.elem.classList.add("karakter");
    }

    // Getter a privát pozíció eléréséhez
    get pozicio() {
        return this.#pozicio;
    }

    // Getter a privát hátizsák tartalmának eléréséhez
    get hatizsak() {
        return this.#hatizsak;
    }

    /**
     * Karakter kirajzolása a játéktérre.
     */
    megjelenit(szulo) {

        this.elem.innerHTML = `<img src="${this.kep}">`;

        this.frissit();

        szulo.appendChild(this.elem);
    }

    /**
     * Stílusok frissítése az aktuális pozíció alapján (mozgás leképezése).
     */
    frissit() {

        this.elem.style.left = `${this.#pozicio.x}px`;
        this.elem.style.top = `${this.#pozicio.y}px`;
    }

    /**
     * Tárgy hozzáadása a karakter hátizsákjához.
     * @param {Object} targy - A felveendő objektum (pl. Kulcs)
     */
    felvesz(targy) {
        this.#hatizsak.push(targy);
    }

    /**
     * Tárgy eltávolítása a hátizsákból (pl. felhasználáskor).
     * @param {Object} targy - Az eldobandó/használandó tárgy
     */
    lerak(targy) {
        const i = this.#hatizsak.indexOf(targy);

        // Ha megtalálható a tárgy a tömbben, kivesszük belőle
        if (i !== -1) {
            this.#hatizsak.splice(i, 1);
        }
    }
}