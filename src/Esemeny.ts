export interface Resztvevo {
    nev: string;
    email: string;
}

export class Esemeny {
    constructor(
        public nev:string,
        public helyszin: string,
        public datum: Date,
        public resztvevo:Resztvevo[] = [],
        public tema: string = "general"
    ) {}

addResztvevo(resztvevo:Resztvevo): void {
    this.resztvevo.push(resztvevo);
}

removeResztvevo(name:string): void {
    this.resztvevo = this.resztvevo.filter(p => p.nev !== name);
}

printReszletek():void {
    console.log(`Esemeny: ${this.nev}`);
    console.log(`Helyszin: ${this.helyszin}`);
    console.log(`Datum: ${this.datum}`);
    console.log(`Resztvevok szama: ${this.resztvevo.length}`);
    console.log(`Tema: ${this.tema}`);
    
}

}