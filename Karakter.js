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

    get pozicio() {
        return this.#pozicio;
    }

    get hatizsak() {
        return this.#hatizsak;
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
        const i = this.#hatizsak.indexOf(targy);

        if (i !== -1) {
            this.#hatizsak.splice(i, 1);
        }
    }
}