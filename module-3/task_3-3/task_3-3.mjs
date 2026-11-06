"use strict";

import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

// Skriver ut dagens dato
function skrivDagensDato() {
    const iDag = new Date();

    printOut(
        iDag.toLocaleDateString("no-NB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    );
}

skrivDagensDato();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// Returnerer dagens dato
function hentDagensDato() {
    const iDag = new Date();

    printOut(
        "Dagens dato: " +
        iDag.toLocaleDateString("no-NB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    );

    return iDag;
}

// Regner ut antall dager mellom to datoer
function dagerTilLansering(iDag, lanseringsDato) {

    const millisekunderPerDag = 24 * 60 * 60 * 1000;

    const dato1 = Date.UTC(
        iDag.getFullYear(),
        iDag.getMonth(),
        iDag.getDate()
    );

    const dato2 = Date.UTC(
        lanseringsDato.getUTCFullYear(),
        lanseringsDato.getUTCMonth(),
        lanseringsDato.getUTCDate()
    );

    return Math.round((dato2 - dato1) / millisekunderPerDag);
}

const iDag = hentDagensDato();
const lanseringsDato = new Date("2025-05-14");
const dagerIgjen = dagerTilLansering(iDag, lanseringsDato);

if (dagerIgjen > 0) {
    printOut("2XKO lanseres om " + dagerIgjen + " dager!");
}
else if (dagerIgjen === 0) {
    printOut("2XKO lanseres i dag!");
}
else {
    printOut("Lanseringen var for " + Math.abs(dagerIgjen) + " dager siden.");
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// Regner ut diameter, omkrets og areal
function skrivSirkelInfo(radius) {

    const diameter = radius * 2;
    const omkrets = 2 * Math.PI * radius;
    const areal = Math.PI * radius * radius;

    printOut(
        "Radius: " + radius +
        ", Diameter: " + diameter +
        ", Omkrets: " + omkrets.toFixed(2) +
        ", Areal: " + areal.toFixed(2)
    );
}

skrivSirkelInfo(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

// Regner ut omkrets og areal av et rektangel
function skrivRektangelInfo(bredde, høyde) {

    const omkrets = 2 * (bredde + høyde);
    const areal = bredde * høyde;

    printOut(
        "Bredde: " + bredde +
        ", Høyde: " + høyde +
        ", Omkrets: " + omkrets +
        ", Areal: " + areal
    );
}

skrivRektangelInfo(8, 4);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Gjør om mellom Celsius, Fahrenheit og Kelvin
function konverterTemperatur(temp, type) {

    type = type.toUpperCase();

    let celsius;

    if (type === "C") {
        celsius = temp;
    }
    else if (type === "F") {
        celsius = (temp - 32) * 5 / 9;
    }
    else if (type === "K") {
        celsius = temp - 273.15;
    }
    else {
        printOut("Ukjent temperaturtype");
        return;
    }

    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;

    printOut(
        temp + "°" + type +
        " = " +
        Math.round(celsius) + "°C, " +
        Math.round(fahrenheit) + "°F, " +
        Math.round(kelvin) + " K"
    );
}

konverterTemperatur(25, "C");
konverterTemperatur(77, "F");
konverterTemperatur(300, "K");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// Regner ut pris uten mva
function beregnPrisUtenMva(prisMedMva, gruppe) {

    let mva = 0;

    if (gruppe.toLowerCase() === "normal") {
        mva = 25;
    }
    else if (gruppe.toLowerCase() === "food") {
        mva = 15;
    }
    else if (
        gruppe.toLowerCase() === "hotel" ||
        gruppe.toLowerCase() === "transport" ||
        gruppe.toLowerCase() === "cinema"
    ) {
        mva = 10;
    }
    else {
        printOut("Ukjent mva-gruppe");
        return NaN;
    }

    return (100 * prisMedMva) / (100 + mva);
}

printOut("Normal mva: " + beregnPrisUtenMva(125, "normal").toFixed(2));
printOut("Mat mva: " + beregnPrisUtenMva(115, "food").toFixed(2));
printOut("Kino mva: " + beregnPrisUtenMva(110, "cinema").toFixed(2));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// Regner ut fart, tid eller distanse
function beregnFartTidDistanse(distanse, tid, fart) {

    let mangler = 0;

    if (distanse === undefined) mangler++;
    if (tid === undefined) mangler++;
    if (fart === undefined) mangler++;

    if (mangler !== 1) {
        return NaN;
    }

    if (fart === undefined) {
        return distanse / tid;
    }

    if (tid === undefined) {
        return distanse / fart;
    }

    return fart * tid;
}

printOut("Fart: " + beregnFartTidDistanse(150, 3, undefined));
printOut("Tid: " + beregnFartTidDistanse(150, undefined, 50));
printOut("Distanse: " + beregnFartTidDistanse(undefined, 3, 50));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

// Fyller ut tekst med tegn
function fyllUtTekst(tekst, lengde, tegn, foran) {

    while (tekst.length < lengde) {

        if (foran) {
            tekst = tegn + tekst;
        }
        else {
            tekst = tekst + tegn;
        }
    }

    return tekst;
}

printOut(fyllUtTekst("JavaScript", 16, "*", true));
printOut(fyllUtTekst("Loops", 12, "-", false));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

// Sjekker et tallmønster
function sjekkTallmonster(antallLinjer) {

    let nesteTall = 1;

    for (let linje = 1; linje <= antallLinjer; linje++) {

        let venstreSum = 0;
        let hoyreSum = 0;

        for (let i = 0; i <= linje; i++) {
            venstreSum += nesteTall;
            nesteTall++;
        }

        for (let i = 0; i < linje; i++) {
            hoyreSum += nesteTall;
            nesteTall++;
        }

        if (venstreSum !== hoyreSum) {
            printOut(
                "Feil på linje " +
                linje +
                ". Venstre sum: " +
                venstreSum +
                ", Høyre sum: " +
                hoyreSum
            );
            return false;
        }
    }

    printOut("Maths fun!");
    return true;
}

sjekkTallmonster(200);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

// Regner ut fakultet
function fakultet(tall) {

    if (!Number.isInteger(tall) || tall < 0) {
        return NaN;
    }

    if (tall <= 1) {
        return 1;
    }

    return tall * fakultet(tall - 1);
}

printOut("6! = " + fakultet(6));

printOut(newLine);