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
}
exports.EsemenyKezelo = EsemenyKezelo;
