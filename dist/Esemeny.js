"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Esemeny = void 0;
class Esemeny {
    constructor(nev, helyszin, datum, resztvevo = [], tema = "general") {
        this.nev = nev;
        this.helyszin = helyszin;
        this.datum = datum;
        this.resztvevo = resztvevo;
        this.tema = tema;
    }
    addResztvevo(resztvevo) {
        this.resztvevo.push(resztvevo);
    }
    removeResztvevo(name) {
        this.resztvevo = this.resztvevo.filter(p => p.nev !== name);
    }
    printReszletek() {
        console.log(`Esemeny: ${this.nev}`);
        console.log(`Helyszin: ${this.helyszin}`);
        console.log(`Datum: ${this.datum}`);
        console.log(`Resztvevok szama: ${this.resztvevo.length}`);
        console.log(`Tema: ${this.tema}`);
    }
}
exports.Esemeny = Esemeny;
