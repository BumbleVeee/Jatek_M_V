export default class Karakter {
    #pozicio = {};
    #hatizsak;

    constructor(nev, x, y, kep = "") {
        this.nev = nev;
        this.#pozicio = {x: x, y : y};
        this.#hatizsak = [];
        this.kep = kep;

        this.elem = document.createElement("div");
        this.elem.classList.add("karakter");
    }

    megjelenit(szulo) {

        this.elem.innerHTML = `<img src="${this.kep}">`;

        this.frissit();

        szulo.appendChild(this.elem);
    }

    frissit() {

        this.elem.style.left = `${this.#pozicio.x}px`;
        this.elem.style.top = `${this.#pozicio.y}px`;
    }

    felvesz(targy) {
        this.#hatizsak.push(targy);
    }

    
    lerak(targy) {
        const i = this.inventory.indexOf(targy);

        if (i !== -1) {
            this.inventory.splice(i, 1);
        }
    }
}