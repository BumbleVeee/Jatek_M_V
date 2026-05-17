export default class Ajto {
    #nyitva;
    #pozicio;
    
    constructor(x, y) {
        this.#nyitva = false;
        this.#pozicio = {x: x, y : y};
    }

    getPozicio() {
        return this.#pozicio;
    }

    isNyitva() {
        return this.#nyitva;
    }

    interakcio() {
        
    }

    megjelenit() {
        
    }

}