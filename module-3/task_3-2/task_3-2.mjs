"use strict";

import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

// Teller opp fra 1 til 10
let tellerOpp = "Teller opp: ";

for (let tall = 1; tall <= 10; tall++) {
    tellerOpp += tall + " ";
}

printOut(tellerOpp.trim());

// Teller ned fra 10 til 1
let tellerNed = "Teller ned: ";

for (let tall = 10; tall >= 1; tall--) {
    tellerNed += tall + " ";
}

printOut(tellerNed.trim());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// Datamaskinen gjetter tilfeldige tall til den finner 45
const målTall1 = 45;
let gjettetTall1 = 0;

while (gjettetTall1 !== målTall1) {
    gjettetTall1 = Math.floor(Math.random() * 60) + 1;
}

printOut("Datamaskinen gjettet " + gjettetTall1);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// Samme som del 2, men teller hvor mange forsøk som brukes
const målTall2 = 45;
let gjettetTall2 = 0;
let antallForsøk = 0;

const startTid = Date.now();

while (gjettetTall2 !== målTall2) {
    gjettetTall2 = Math.floor(Math.random() * 1000000) + 1;
    antallForsøk++;
}

const bruktTid = Date.now() - startTid;

printOut(
    "Datamaskinen gjettet " +
    gjettetTall2 +
    " etter " +
    antallForsøk +
    " forsøk på " +
    bruktTid +
    " ms"
);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

// Finner alle primtall under 200
let primtall = "Primtall under 200: ";

for (let tall = 2; tall < 200; tall++) {

    let erPrimtall = true;

    for (let deler = 2; deler <= Math.sqrt(tall); deler++) {
        if (tall % deler === 0) {
            erPrimtall = false;
        }
    }

    if (erPrimtall) {
        primtall += tall + " ";
    }
}

printOut(primtall.trim());

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

// Skriver ut et rutenett med 7 rader og 9 kolonner
for (let rad = 1; rad <= 7; rad++) {

    let tekst = "";

    for (let kolonne = 1; kolonne <= 9; kolonne++) {
        tekst += " K" + kolonne + "R" + rad;
    }

    printOut(tekst.trim());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// Trekker poengsummer og regner ut karakter
for (let elev = 1; elev <= 5; elev++) {

    const poeng = Math.floor(Math.random() * 236) + 1;
    const prosent = (poeng / 236) * 100;

    let karakter;

    if (prosent >= 89) {
        karakter = "A";
    } else if (prosent >= 77) {
        karakter = "B";
    } else if (prosent >= 65) {
        karakter = "C";
    } else if (prosent >= 53) {
        karakter = "D";
    } else if (prosent >= 41) {
        karakter = "E";
    } else {
        karakter = "F";
    }

    printOut(
        "Elev " +
        elev +
        ": " +
        poeng +
        "/236 poeng (" +
        prosent.toFixed(1) +
        "%) - karakter " +
        karakter
    );
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// Kaster seks terninger
function kastTerninger() {
    const terninger = [];

    for (let i = 0; i < 6; i++) {
        terninger.push(Math.floor(Math.random() * 6) + 1);
    }

    return terninger;
}

// Teller hvor mange ganger hvert tall forekommer
function tellTerninger(terninger) {

    const antall = [0, 0, 0, 0, 0, 0, 0];

    for (const terning of terninger) {
        antall[terning]++;
    }

    return antall;
}

// Full straight
let kast = 0;
let terninger;
let funnet = false;

while (!funnet) {

    terninger = kastTerninger();
    kast++;

    const antall = tellTerninger(terninger);

    funnet = true;

    for (let i = 1; i <= 6; i++) {
        if (antall[i] !== 1) {
            funnet = false;
        }
    }
}

printOut("Full straight: " + kast + " kast");

// Tre par
kast = 0;
funnet = false;

while (!funnet) {

    terninger = kastTerninger();
    kast++;

    const antall = tellTerninger(terninger);

    let par = 0;

    for (let i = 1; i <= 6; i++) {
        if (antall[i] === 2) {
            par++;
        }
    }

    if (par === 3) {
        funnet = true;
    }
}

printOut("Tre par: " + kast + " kast");

// Tårn
kast = 0;
funnet = false;

while (!funnet) {

    terninger = kastTerninger();
    kast++;

    const antall = tellTerninger(terninger);

    let harPar = false;
    let harFireLike = false;

    for (let i = 1; i <= 6; i++) {

        if (antall[i] === 2) {
            harPar = true;
        }

        if (antall[i] === 4) {
            harFireLike = true;
        }
    }

    if (harPar && harFireLike) {
        funnet = true;
    }
}

printOut("Tårn: " + kast + " kast");

// Yahtzee
kast = 0;
funnet = false;

while (!funnet) {

    terninger = kastTerninger();
    kast++;

    const antall = tellTerninger(terninger);

    for (let i = 1; i <= 6; i++) {
        if (antall[i] === 6) {
            funnet = true;
        }
    }
}

printOut("Yahtzee: " + kast + " kast");

printOut(newLine);