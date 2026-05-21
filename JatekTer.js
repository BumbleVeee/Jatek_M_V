import Karakter from "./Karakter.js";
import Kulcs from "./Kulcs.js";
import Ajto from "./Ajto.js";
import { KEPLISTA } from "./adat.js";

export default class Jatekter {
  #karakter;
  #ajto;
  #kulcs;
  constructor() {
    this.szuloElem = document.querySelector("#jatekter");
    this.#karakter = new Karakter("placeholder", 50, 50, KEPLISTA[0].kep);
    this.#kulcs = new Kulcs(300, 200, KEPLISTA[1].kep);
    this.#ajto = new Ajto(600, 150, KEPLISTA[2].kep);

    this.input = {
      left: false,
      right: false,
      up: false,
      down: false,
    };

    this.esemenyek();
    this.megjelenit();
    
    this.karakterElem = document.querySelector(".karakter");
  }

  esemenyek() {
    window.addEventListener("keydown", (e) => {
      this.karakterElem.classList.add("mozog");
      
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        this.input.left = true;
      }

      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        this.input.right = true;
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        this.input.up = true;
      }

      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        this.input.down = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      this.karakterElem.classList.remove("mozog");

      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        this.input.left = false;
      }

      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        this.input.right = false;
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        this.input.up = false;
      }

      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        this.input.down = false;
      }
    });
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

    this.#ajto.frissit();
  }

  mozgas() {

    const sebesseg = 2;

    const palyaSzelesseg = 800;
    const palyaMagassag = 600;

    const karakterMeret = 50;

    // BAL
    if (
        this.input.left &&
        this.#karakter.pozicio.x > 0
    ) {
        this.#karakter.pozicio.x -= sebesseg;
    }

    // JOBB
    if (
        this.input.right &&
        this.#karakter.pozicio.x < palyaSzelesseg - karakterMeret
    ) {
        this.#karakter.pozicio.x += sebesseg;
    }

    // FEL
    if (
        this.input.up &&
        this.#karakter.pozicio.y > 0
    ) {
        this.#karakter.pozicio.y -= sebesseg;
    }

    // LE
    if (
        this.input.down &&
        this.#karakter.pozicio.y < palyaMagassag - karakterMeret
    ) {
        this.#karakter.pozicio.y += sebesseg;
    }
  }

  kulcsFelvetel() {
    const kozelVan =
      Math.abs(this.#karakter.pozicio.x - this.#kulcs.pozicio.x) < 20 &&
      Math.abs(this.#karakter.pozicio.y - this.#kulcs.pozicio.y) < 20;

    if (this.#kulcs.felveheto && kozelVan) {
      this.#karakter.felvesz(this.#kulcs);

      this.#kulcs.felvesz();

      console.log("Kulcs felvéve!");
    }
  }

  ajtoNyitas() {
    const kozelVan =
      Math.abs(this.#karakter.pozicio.x - this.#ajto.pozicio.x) < 20 &&
      Math.abs(this.#karakter.pozicio.y - this.#ajto.pozicio.y) < 20;

    const vanKulcs = this.#karakter.hatizsak.includes(this.#kulcs);

    if (kozelVan && vanKulcs) {
      this.#ajto.kinyit();

      this.#karakter.lerak(this.#kulcs);

      console.log("Ajtó kinyitva!");
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
