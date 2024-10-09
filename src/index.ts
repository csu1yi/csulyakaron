import { Esemeny } from "./Esemeny";
import { EsemenyKezelo } from "./EsemenyKezelo";

console.log("Rendezvenykezelo");




const esemenyKezelo = new EsemenyKezelo();

const szulinap = new Esemeny(
    "Szulinapi buli",
    "Dunaalmas",
    new Date("2025-01-23"),
    [],
    "szulinap"
);

const koncert = new Esemeny(
    "AC/DC koncert",
    "Budapest Puskas Arena",
    new Date("2025-03-12"),
    [],
    "Koncert"
);

const koncert2 = new Esemeny(
    "Azariah koncert",
    "Budapest Puskas Arena",
    new Date("2025-05-24"),
    [],
    "Koncert"
);

const eskuvo = new Esemeny(
    "Eskuvo",
    "Hilltop E tterem",
    new Date("2026-06-12"),
    [],
    "Eskuvo"
);

esemenyKezelo.addEsemeny(koncert);
esemenyKezelo.addEsemeny(koncert2);
esemenyKezelo.addEsemeny(szulinap);
esemenyKezelo.addEsemeny(eskuvo);

console.log("Koncert rendezvények:");
esemenyKezelo.getEsemenyTemaSzerint("Koncert").forEach(esemeny => esemeny.printReszletek());

console.log("Minden esemény:");
esemenyKezelo.esemenytListaz();

