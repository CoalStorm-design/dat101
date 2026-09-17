"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");


// Original expression
const originalPart1 = 2 + 3 * 2 - 4 * 6;

// Modified expression to force (2 - 4) first
const modifiedPart1 = 2 + 3 * (2 - 4) * 6;

printOut("Original expression result: " + originalPart1);
printOut("Modified expression result: " + modifiedPart1);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");


const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;

printOut("Total inches: " + sumPart2.toFixed(2));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");


const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer =
  (part3Days * 24 * 60) +
  (part3Hours * 60) +
  part3Minutes +
  (part3Seconds / 60);

printOut("Total minutes: " + part3Answer);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");


let totalMinutes = 6322.52;
let remainder = totalMinutes / (24 * 60);

const wholeDays = Math.floor(remainder);
remainder = remainder - wholeDays;

const totalHours = remainder * 24;
const wholeHours = Math.floor(totalHours);
remainder = totalHours - wholeHours;

const totalMinutes2 = remainder * 60;
const wholeMinutes = Math.floor(totalMinutes2);
remainder = totalMinutes2 - wholeMinutes;

const totalSeconds = remainder * 60;
const wholeSeconds = Math.floor(totalSeconds);

printOut("Days: " + wholeDays);
printOut("Hours: " + wholeHours);
printOut("Minutes: " + wholeMinutes);
printOut("Seconds: " + wholeSeconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const usd = 54;
const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const usdToNok = Math.round(usd * nokRate);
const nokToUsd = Math.round(usd * usdRate);

printOut("USD → NOK: " + usdToNok);
printOut("NOK → USD: " + nokToUsd);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");


const textPart6 = "There is much between heaven and earth that we do not understand.";

printOut("Length: " + textPart6.length);
printOut("Character at position 19: " + textPart6.charAt(19));
printOut("Substring (35–43): " + textPart6.substring(35, 43));
printOut("Index of 'earth': " + textPart6.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");


printOut("Is 5 > 3? " + (5 > 3));
printOut("Is 7 >= 7? " + (7 >= 7));
printOut("Is 'a' > 'b'? " + ("a" > "b"));
printOut("Is '1' < 'a'? " + ("1" < "a"));
printOut("Is '2500' < 'abcd'? " + ("2500" < "abcd"));
printOut("'arne' !== 'thomas'? " + ("arne" !== "thomas"));
printOut("Is 2 === 5? " + (2 === 5));
printOut("Is 'abcd' > 'bcd'? " + ("abcd" > "bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");


printOut("Number('254'): " + Number("254"));
printOut("Number('57.23'): " + Number("57.23"));
printOut("parseInt('25 kroner'): " + parseInt("25 kroner"));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");


const r = Math.floor(Math.random() * 360) + 1;
printOut("Random number (1–360): " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");


const totalDays10 = 131;
const weeks = Math.floor(totalDays10 / 7);
const leftoverDays = totalDays10 % 7;

printOut("Weeks: " + weeks);
printOut("Days: " + leftoverDays);

printOut(newLine);
