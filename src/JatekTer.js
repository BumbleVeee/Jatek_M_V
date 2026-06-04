import Karakter from "./Karakter.js";
import Kulcs from "./Kulcs.js";
import Ajto from "./Ajto.js";
import { KEPLISTA } from "./adat.js";

/**
 * A fő játéklogikát, bemeneteket (input) és az ütközéseket kezelő osztály.
 */
export default class Jatekter {
  // Privát játékelemek deklarálása
  #karakter;
  #ajto;
  #kulcs;

  constructor() {
  // Megkeressük a fő játéktér konténert a HTML-ben
    this.szuloElem = document.querySelector("#jatekter");

    // Hátizsák zsebei (6 db)
    this.hatizsakElem = document.querySelectorAll("#hatizsak ul li"); 

    // Példányosítjuk a játékelemeket fix kezdőpozíciókkal és képekkel
    this.#karakter = new Karakter("placeholder", 100, 150, KEPLISTA[0].kep);
    this.#kulcs = new Kulcs(650, 450, KEPLISTA[1].kep);
    this.#ajto = new Ajto(350, 25, KEPLISTA[2].kep);

    // Az iránygombok állapotának követése (true = le van nyomva)
    this.input = {
      left: false,
      right: false,
      up: false,
      down: false,
    };

    // Eseménykezelők és kezdeti megjelenítés indítása
    this.esemenyek();
    this.megjelenit();

    // Eltároljuk a karakter DOM elemét a mozgási animációk vezérléséhez
    this.karakterElem = document.querySelector(".karakter");
  }

  /**
   * Felregisztrálja a billentyűzet és ablak eseményeket.
   */
  esemenyek() {
    let mozgasIdozito = null; // Időzítő a folyamatos mozgáshoz

    window.addEventListener("keydown", (e) => {
      const LEPES_KOZ = 40; // Egy lépéssel ennyi pixelt halad a karakter
      
      // Elmentjük a jelenlegi pozíciót, hogy ellenőrizhessük a határokat
      let ujX = this.#karakter.pozicio.x;
      let ujY = this.#karakter.pozicio.y;

      // Ha egy korábbi lépés után még ketyeg az animáció leállítása, azt töröljük
      if (mozgasIdozito) {
        clearTimeout(mozgasIdozito);
        mozgasIdozito = null;
      }

      // Animáció osztály hozzáadása
      this.karakterElem.classList.add("mozog");

      // Pozíció kiszámítása gombnyomásra (Pályahatárok ellenőrzésével)
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        if (ujX - LEPES_KOZ >= 0) ujX -= LEPES_KOZ;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        if (ujX + LEPES_KOZ <= 800 - 70) ujX += LEPES_KOZ; // palyaSzelesseg - karakterSzelesseg
      }
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        if (ujY - LEPES_KOZ >= 50) ujY -= LEPES_KOZ;
      }
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        if (ujY + LEPES_KOZ <= 600 - 100) ujY += LEPES_KOZ; // palyaMagassag - karakterMagassag
      }

      // Ténylegesen átírjuk a karakter koordinátáit
      this.#karakter.pozicio.x = ujX;
      this.#karakter.pozicio.y = ujY;
    });

    window.addEventListener("keyup", () => {
      // Amikor FELENGEDI a gombot, nem töröljük azonnal!
      // Megvárunk 150 ezredmásodpercet (0.15s), amíg a CSS transition befejeződik
      if (mozgasIdozito === null) {
        mozgasIdozito = setTimeout(() => {
          this.karakterElem.classList.remove("mozog");
          mozgasIdozito = null; // Alaphelyzetbe állítjuk az időzítőt
        }, 500); // Ez a szám egyezzen meg a CSS transition idejével!
      }
    });

    // Ha a felhasználó átvált egy másik ablakra, nullázzuk az inputokat (ne ragadjon be a mozgás)
    window.addEventListener("blur", () => {
      this.karakterElem.classList.remove("mozog");
    });
  }
  
  /**
   * Kirajzolja az összes játékelemet a szülő konténerbe.
   */
  megjelenit() {
    this.#karakter.megjelenit(this.szuloElem);

    this.#kulcs.megjelenit(this.szuloElem);

    this.#ajto.megjelenit(this.szuloElem);
  }

  /**
   * Frissíti a hátizsák megjelenítését a karakter aktuális tárgyai alapján. 
   */
  hatizsakMegjelenit() {
    if (this.#karakter.hatizsak.length === 0) {
      this.hatizsakElem.forEach((zseb) => {
        zseb.innerHTML = ""; // Üres zsebek megjelenítése
      });
      return; // Nincs mit megjeleníteni, kilépünk a függvényből
    }
    let sikeresElhelyezes = false;
    let a_valtozod_neve = this.#karakter.hatizsak[this.#karakter.hatizsak.length - 1].kep;
    console.log("A felvett tárgy képe:", a_valtozod_neve);
    // Tárgyak megjelenítése a hátizsákban
    this.hatizsakElem.forEach((zseb) => {
      if (sikeresElhelyezes === false && zseb.innerHTML === "") {
        let kepElem =document.createElement("img");
        kepElem.src = a_valtozod_neve;
        zseb.appendChild(kepElem);
        sikeresElhelyezes = true;
      }
    });
  }

  /**
   * A játék fő frissítési ciklusa (minden képkockánál lefut).
   */
  update() {
    this.kulcsFelvetel(); // Tárgyfelvétel ellenőrzése
    this.ajtoNyitas(); // Ajtónyitás feltételeinek ellenőrzése

    // Vizuális frissítések a képernyőn
    this.#karakter.frissit();
    this.#ajto.frissit();
  }

  /**
   * Karakter mozgásának kezelése, figyelembe véve a pálya határait.
   */
  mozgas() {
    const sebesseg = 2; // Lépésenkénti elmozdulás pixelben

    // Pálya és karakter dimenziói a falak ütközésvizsgálatához
    const palyaSzelesseg = 800;
    const palyaMagassag = 600;

    const karakterSzelesseg = 70;
    const karakterMagassag = 100;

    // BALRA mozgás falkövetéssel
    if (this.input.left && this.#karakter.pozicio.x > 0) {
      this.#karakter.pozicio.x -= sebesseg;
    }

    // JOBBRA mozgás falkövetéssel (pályaszélesség - karakterszélesség)
    if (
      this.input.right &&
      this.#karakter.pozicio.x < palyaSzelesseg - karakterSzelesseg
    ) {
      this.#karakter.pozicio.x += sebesseg;
    }

    // FEL mozgás (egy kis felső margó / 50px / meghagyásával)
    if (this.input.up && this.#karakter.pozicio.y > 50) {
      this.#karakter.pozicio.y -= sebesseg;
    }

    // LE mozgás falkövetéssel
    if (
      this.input.down &&
      this.#karakter.pozicio.y < palyaMagassag - karakterMagassag
    ) {
      this.#karakter.pozicio.y += sebesseg;
    }
  }

  /**
   * Ellenőrzi, hogy a karakter elég közel van-e a kulcshoz, hogy felvegye.
   */
  kulcsFelvetel() {
    // Középpontok kiszámítása a pontosabb távolságméréshez
    const karKozepX = this.#karakter.pozicio.x + 35; // 70 fele
    const karKozepY = this.#karakter.pozicio.y + 50; // 100 fele

    const kulcsKozepX = this.#kulcs.pozicio.x + 17.5; // 35 fele
    const kulcsKozepY = this.#kulcs.pozicio.y + 17.5; // 35 fele

    // Távolság ellenőrzése X és Y tengelyen (Abszolút értékkel)
    const kulcsKozVan =
      Math.abs(karKozepX - kulcsKozepX) < 50 && // Megnövelt toleranciakeret
      Math.abs(karKozepY - kulcsKozepY) < 60;

    // Ha a kulcs még ott van, és közel vagyunk
    if (this.#kulcs.felveheto && kulcsKozVan) {
      this.#karakter.felvesz(this.#kulcs); // Hátizsákba rakás
      this.#kulcs.felvesz(); // Földről eltávolítás
      this.hatizsakMegjelenit(); // Hátizsák megjelenítésének frissítése

      console.log("Kulcs felvéve!");
      window.alert("Kulcs felvéve!");
    }
  }

  /**
   * Ellenőrzi, hogy a karakter az ajtónál van-e a kulccsal a táskájában.
   */
  ajtoNyitas() {
    // Karakter és ajtó távolsága
    const ajtoKozVan =
      Math.abs(this.#karakter.pozicio.x - this.#ajto.pozicio.x) < 70 &&
      Math.abs(this.#karakter.pozicio.y - this.#ajto.pozicio.y) < 50;

    // Megnézzük, benne van-e a kulcs objektum a karakter hátizsák tömbjében
    const vanKulcs = this.#karakter.hatizsak.includes(this.#kulcs);

    // Győzelmi feltétel: ha ott az ajtó és megvan a kulcs
    if (ajtoKozVan && vanKulcs) {
      this.#ajto.kinyit(); // Ajtó kinyitása
      this.#karakter.lerak(this.#kulcs); // Kulcs elhasználása (kivétel a táskából)
      this.hatizsakMegjelenit(); // Hátizsák megjelenítésének frissítése
      
      console.log("Ajtó kinyitva!");
      window.alert("Ajtó kinyitva! Kijutottál a szobából!");
    }
  }
}