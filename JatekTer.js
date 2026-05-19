export default class JatekTer {
    #ajto;
    #kulcs;
    #magassag;
    #szelesseg;
    constructor() {
        
    }


}


/*
for (let y = 0; y < this.magassag; y++) {

    for (let x = 0; x < this.szelesseg; x++) {

        const mezo = document.createElement("div");

        mezo.classList.add("mezo");

        mezo.dataset.x = x;
        mezo.dataset.y = y;

        ter.appendChild(mezo);
    }
}

vagy

for (let y = 0; y < this.magassag; y++) {

    this.mezok[y] = [];

    for (let x = 0; x < this.szelesseg; x++) {

        const mezo = document.createElement("div");

        mezo.classList.add("mezo");

        ter.appendChild(mezo);

        // eltároljuk a DOM elemet
        this.mezok[y][x] = mezo;
    }
}
*/