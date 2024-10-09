"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsemenyKezelo = void 0;
class EsemenyKezelo {
    constructor() {
        this.esemenyek = [];
    }
    addEsemeny(esemeny) {
        this.esemenyek.push(esemeny);
    }
    getEsemenyTemaSzerint(tema) {
        return this.esemenyek.filter(esemeny => esemeny.tema == tema);
    }
    esemenytListaz() {
        this.esemenyek.forEach(esemeny => esemeny.printReszletek());
    }
    editEsemeny(nev, updatedEsemeny) {
        const esemeny = this.esemenyek.find(e => e.nev === nev);
        if (esemeny) {
            if (updatedEsemeny.nev)
                esemeny.nev = updatedEsemeny.nev;
            if (updatedEsemeny.helyszin)
                esemeny.helyszin = updatedEsemeny.helyszin;
            if (updatedEsemeny.datum)
                esemeny.datum = updatedEsemeny.datum;
            if (updatedEsemeny.tema)
                esemeny.tema = updatedEsemeny.tema;
        }
        else {
            console.log(`Nincs ${nev} nevu rendezveny`);
        }
    }
    deleteEsemeny(nev) {
        this.esemenyek = this.esemenyek.filter(esemeny => esemeny.nev !== nev);
        console.log(`Rendezveny torlesre kerult: ${nev}`);
    }
}
exports.EsemenyKezelo = EsemenyKezelo;
