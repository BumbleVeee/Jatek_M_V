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
    this.#karakter = new Karakter("placeholder", 100, 150, KEPLISTA[0].kep);
    this.#kulcs = new Kulcs(650, 450, KEPLISTA[1].kep);
    this.#ajto = new Ajto(350, 25, KEPLISTA[2].kep);

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
      
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        this.input.left = true;
        this.karakterElem.classList.add("mozog");
      }

      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        this.input.right = true;
        this.karakterElem.classList.add("mozog");
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        this.input.up = true;
        this.karakterElem.classList.add("mozog");
      }

      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        this.input.down = true;
        this.karakterElem.classList.add("mozog");
      }
    });

    window.addEventListener("keyup", (e) => {
      
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        this.input.left = false;
        this.karakterElem.classList.remove("mozog");
      }

      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        this.input.right = false;
        this.karakterElem.classList.remove("mozog");
      }

      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        this.input.up = false;
        this.karakterElem.classList.remove("mozog");
      }

      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        this.input.down = false;
        this.karakterElem.classList.remove("mozog");
      }
    });
    
    window.addEventListener("blur", () => {
      this.inputReset();
    });
  }

  inputReset() {
      this.input.left = false;
      this.input.right = false;
      this.input.up = false;
      this.input.down = false;
      this.karakterElem.classList.remove("mozog");
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

    const karakterSzelesseg = 70;
    const karakterMagassag = 100;

    // BAL
    if (this.input.left && this.#karakter.pozicio.x > 0) {
      this.#karakter.pozicio.x -= sebesseg;
    }

    // JOBB
    if (
      this.input.right &&
      this.#karakter.pozicio.x < palyaSzelesseg - karakterSzelesseg
    ) {
      this.#karakter.pozicio.x += sebesseg;
    }

    // FEL
    if (this.input.up && this.#karakter.pozicio.y > 80) {
      this.#karakter.pozicio.y -= sebesseg;
    }

    // LE
    if (
      this.input.down &&
      this.#karakter.pozicio.y < palyaMagassag - karakterMagassag
    ) {
      this.#karakter.pozicio.y += sebesseg;
    }
  }

  kulcsFelvetel() {
    const kozelVan =
      Math.abs(this.#karakter.pozicio.x - this.#kulcs.pozicio.x) < 75 &&
      Math.abs(this.#karakter.pozicio.y - this.#kulcs.pozicio.y) < 75;

    if (this.#kulcs.felveheto && kozelVan) {
      this.#karakter.felvesz(this.#kulcs);

      this.#kulcs.felvesz();

      console.log("Kulcs felvéve!");
      window.alert("Kulcs felvéve!");
    }
  }

  ajtoNyitas() {
    const kozelVan =
      Math.abs(this.#karakter.pozicio.x - this.#ajto.pozicio.x) < 100 &&
      Math.abs(this.#karakter.pozicio.y - this.#ajto.pozicio.y) < 80;

    const vanKulcs = this.#karakter.hatizsak.includes(this.#kulcs);

    if (kozelVan && vanKulcs) {
      this.#ajto.kinyit();

      this.#karakter.lerak(this.#kulcs);

      console.log("Ajtó kinyitva!");
      window.alert("Ajtó kinyitva! Kijutottál a szobából!");
    }
  }
}