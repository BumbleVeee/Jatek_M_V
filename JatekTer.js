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
  }

  esemenyek() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.input.left = true;
      }

      if (e.key === "ArrowRight") {
        this.input.right = true;
      }

      if (e.key === "ArrowUp") {
        this.input.up = true;
      }

      if (e.key === "ArrowDown") {
        this.input.down = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft") {
        this.input.left = false;
      }

      if (e.key === "ArrowRight") {
        this.input.right = false;
      }

      if (e.key === "ArrowUp") {
        this.input.up = false;
      }

      if (e.key === "ArrowDown") {
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
