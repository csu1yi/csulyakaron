import { Esemeny } from "./Esemeny";

export class EsemenyKezelo {
    private esemenyek: Esemeny[] = [];

    addEsemeny(esemeny: Esemeny): void {
        this.esemenyek.push(esemeny);
    }

    getEsemenyTemaSzerint(tema:string):Esemeny[] {
        return this.esemenyek.filter(esemeny => esemeny.tema == tema);
    }

    esemenytListaz(): void{
        this.esemenyek.forEach(esemeny => esemeny.printReszletek());
    }

    editEsemeny(nev:string, updatedEsemeny: Partial<Esemeny>): void{
        const esemeny = this.esemenyek.find(e => e.nev === nev);
        if(esemeny) {
            if(updatedEsemeny.nev) esemeny.nev = updatedEsemeny.nev;
            if(updatedEsemeny.helyszin) esemeny.helyszin = updatedEsemeny.helyszin;
            if(updatedEsemeny.datum) esemeny.datum = updatedEsemeny.datum;
            if(updatedEsemeny.tema) esemeny.tema = updatedEsemeny.tema;
        } else {
            console.log(`Nincs ${nev} nevu rendezveny`);
        }
    }

    deleteEsemeny(nev:string): void {
        this.esemenyek = this.esemenyek.filter(esemeny => esemeny.nev !== nev);
        console.log(`Rendezveny torlesre kerult: ${nev}`);
        
    }
}