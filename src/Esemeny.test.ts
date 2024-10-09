import { Esemeny } from './Esemeny';

describe('Esemeny class', () => {
    let esemeny:Esemeny;

    beforeEach(() => {
        esemeny = new Esemeny('Pelda nev', 'Pelda helyszin', new Date(), [], 'Pelda tema');
    });

    test('letrehoz', () => {
         expect(esemeny.nev).toBe('Pelda nev');
         expect(esemeny.helyszin).toBe('Pelda helyszin');
         expect(esemeny.tema).toBe('Pelda tema');
        });

    test('resztvevo', () => {
        esemeny.addResztvevo({nev: 'Pelda Janos', email: 'pelda@pelda.com', mobile: 123456789});
        expect(esemeny.resztvevo.length).toBe(1);
        expect(esemeny.resztvevo[0].nev).toBe('Pelda Janos');
    });

    test('torol', () => {
        esemeny.addResztvevo({nev: 'Pelda Janos', email: 'pelda@pelda.com', mobile: 123456789});
        esemeny.removeResztvevo('Pelda Janos');
        expect(esemeny.resztvevo.length).toBe(0);
    });
});