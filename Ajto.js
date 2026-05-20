export default class Ajto {
    #nyitva;
    #pozicio;
    
    constructor(x, y, kep = "") {
        this.#nyitva = false;
        this.#pozicio = {x: x, y : y};
        this.kep = kep;

        this.elem = document.createElement("div");
        this.elem.classList.add("ajto");
    }

    megjelenit(szulo) {

        this.elem.innerHTML = `<img src="${this.kep}">`;

        this.frissit();

        szulo.appendChild(this.elem);
    }

    frissit() {

        this.elem.style.left = `${this.#pozicio.x}px`;
        this.elem.style.top = `${this.#pozicio.y}px`;

        if (this.#nyitva) {
            this.elem.classList.add("nyitva");
        }
    }

    kinyit() {
        this.#nyitva = true;
    }

}