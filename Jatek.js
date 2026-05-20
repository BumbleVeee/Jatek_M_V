import Jatekter from "./Jatekter.js";

export default class Jatek {

    constructor() {

        this.jatekter = new Jatekter();

        this.futtat();
    }

    futtat() {

        this.jatekter.update();

        requestAnimationFrame(() => this.futtat());
    }
}