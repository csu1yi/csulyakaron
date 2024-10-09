import { Esemeny } from "./Esemeny";

console.log("Rendezvenykezelo");

const szulinap = new Esemeny(
    "Szulinapi buli",
    "Dunaalmas",
    new Date("2025-01-23"),
    [],
    "szulinap"
);

szulinap.addResztvevo({nev: "Csulyak Aron", email:"aroncsulyak@gmail.com"});
szulinap.addResztvevo({nev: "Pelda Niki", email:"niki@gmail.com"});
szulinap.addResztvevo({nev: "Pelda Sandor", email:"sandor@gmail.com"});

szulinap.removeResztvevo("Pelda Sandor");

szulinap.printReszletek();


