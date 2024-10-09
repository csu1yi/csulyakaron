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
}