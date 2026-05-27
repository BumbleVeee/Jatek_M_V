import Jatekter from "./JatekTer.js";

/**
 * A játék fő motorja, ami a folyamatos futásért felel.
 */
export default class Jatek {

    constructor() {
        // Létrehozza a játékteret
        this.jatekter = new Jatekter();

        // Elindítja a játékciklust
        this.futtat();
    }

    /**
     * Végtelenített frissítési ciklus
     */
    futtat() {
        // Meghívja a játéktér számítási és logika-frissítő metódusát
        this.jatekter.update();

        // A böngésző optimális ütemezésével újra és újra meghívja önmagát
        requestAnimationFrame(() => this.futtat());
    }
}