import Karakter from "./Karakter.js";
import Kulcs from "./Kulcs.js";
import Ajto from "./Ajto.js";
import { KEPLISTA } from "./adat.js";

export default class JatekTer {
  #karakter;
  #ajto;
  #kulcs;
  constructor() {
    this.szuloElem = document.querySelector("jatekter");
    this.#karakter = new Karakter(50, 50, KEPLISTA[0].kep);
    this.#kulcs = new Kulcs(300, 200, KEPLISTA[1].kep);
    this.#ajto = new Ajto(600, 150, KEPLISTA[2].kep);

    this.input = {
      left: false,
      right: false,
      up: false,
      down: false,
    };

    //this.esemenyek();
    //this.mozgas();

    this.megjelenit();
  }

  megjelenit() {
    this.#karakter.megjelenit(this.szuloElem);

    this.#kulcs.megjelenit(this.szuloElem);

    this.#ajto.megjelenit(this.szuloElem);
  }

  update() {
    this.mozgas();

    this.kulcsFelvetel();

    this.ajtoNyitas();

    this.#karakter.frissit();
  }

  mozgas() {
    if (this.input.left) {
      this.#karakter.pozicio.x -= 2;
    }

    if (this.input.right) {
      this.#karakter.pozicio.x += 2;
    }

    if (this.input.up) {
      this.#karakter.pozicio.y -= 2;
    }

    if (this.input.down) {
      this.#karakter.pozicio.y += 2;
    }
  }
}

/*
nem tudjuk hogy szükséges ezek közül valamelyik :(

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
