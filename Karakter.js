export default class Karakter {
    #pozicio = {};
    #hatizsak;

    constructor(nev, x, y, kep = "") {
        this.nev = nev;
        this.#pozicio = {x: x, y : y};
        this.#hatizsak = [];
        this.kep = kep;
    }

    mozog(dx, dy) {
        this.#pozicio.x += dx;
        this.#pozicio.y += dy;
    }

    felvesz(targy) {
        this.#hatizsak.push(targy);
    }

    
    lerak(targy) {
        if (!this.#hatizsak.includes(targy)) {
            return null;
        }

        this.#hatizsak = this.#hatizsak.filter(i => i !== targy);
        return targy;
    }
}