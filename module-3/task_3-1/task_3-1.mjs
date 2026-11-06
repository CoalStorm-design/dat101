"use strict";

import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

const busTime = 7;
const trainTime = 8;
const wakeUpTime = 7;

// Part 1
printOut("Part 1: wake-up time " + wakeUpTime);

if (wakeUpTime === busTime) {
  printOut("I can catch the bus to school");
}

// Part 2
printOut("Part 2: wake-up time " + wakeUpTime);

if (wakeUpTime === busTime) {
  printOut("I can take the bus to school");
} else {
  printOut("I have to take the car to school");
}

// Part 3
printOut("Part 3: wake-up time " + wakeUpTime);

if (wakeUpTime === busTime) {
  printOut("I can take the bus to school");
} else if (wakeUpTime === trainTime) {
  printOut("I can take the train to school");
} else {
  printOut("I have to take the car to school");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

// Part 4
const number1 = -4;

printOut("Part 4: " + number1);

if (number1 < 0) {
  printOut("Negative");
} else {
  printOut("Positive");
}

// Part 5
const number2 = 0;

printOut("Part 5: " + number2);

if (number2 < 0) {
  printOut("Negative");
} else if (number2 > 0) {
  printOut("Positive");
} else {
  printOut("Zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// Part 6
const minimumImageSize = 4;
const imageSize1 = Math.floor(Math.random() * 8) + 1;

printOut("Uploaded image size: " + imageSize1 + "MP");

if (imageSize1 >= minimumImageSize) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

// Part 7
const maximumImageSize = 6;
const imageSize2 = Math.floor(Math.random() * 8) + 1;

printOut("Uploaded image size: " + imageSize2 + "MP");

if (imageSize2 > maximumImageSize) {
  printOut("Image is too large");
} else if (imageSize2 >= minimumImageSize) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

// Part 8
const monthList = [
  "January",
  "February",
  "Mars",
  "April",
  "Mai",
  "Jun",
  "Juli",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const monthName = monthList[Math.floor(Math.random() * monthList.length)];

printOut("Current month: " + monthName);

if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

// Part 9
const daysInMonth = {
  January: 31,
  February: 28,
  Mars: 31,
  April: 30,
  Mai: 31,
  Jun: 30,
  Juli: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

printOut(monthName + " has " + daysInMonth[monthName] + " days");

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

// Part 10
if (monthName === "April") {
  printOut("The gallery has temporary premises in the building next door");
} else if (monthName === "Mars" || monthName === "Mai") {
  printOut("The gallery is closed for refurbishment");
} else {
  printOut("The gallery is open");
}

printOut(newLine);