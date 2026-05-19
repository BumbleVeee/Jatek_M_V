export default class Ajto {
    #nyitva;
    #pozicio;
    
    constructor(x, y, kep = "") {
        this.#nyitva = false;
        this.#pozicio = {x: x, y : y};
        this.kep = kep;
    }

    getPozicio() {
        return this.#pozicio;
    }

    isNyitva() {
        return this.#nyitva;
    }

    kinyit() {
        this.#nyitva = true;
    }

}