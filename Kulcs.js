export default class Kulcs {

    constructor(x, y, kep = "", szelesseg = 32, magassag = 32) {

        this.tipus = "kulcs";

        this.pozicio = {
            x, y
        };

        this.meret = {
            szelesseg,
            magassag
        };

        this.kep = kep;

        this.felveheto = true;
    }
}