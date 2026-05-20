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

        this.elem = document.createElement("div");
        this.elem.classList.add("kulcs");
    }

    megjelenit(szulo){
        this.elem.innerHTML = `<img src="${this.kep}">`;
        this.frissit();
        szulo.appendChild(this.elem);
    }

    frissit() {

        this.elem.style.left = `${this.pozicio.x}px`;
        this.elem.style.top = `${this.pozicio.y}px`;
    }

    felvesz() {
        this.felveheto = false;
        this.elem.remove();
    }

}