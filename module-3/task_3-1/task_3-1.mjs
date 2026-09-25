"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
{
  const timeBus = 7;
  const wakeUpTimes = [6, 7, 8];

  for (const wakeUpTime of wakeUpTimes) {
    printOut(`Part 1: if (wakeUpTime === timeBus) with wake-up time ${wakeUpTime}`);
    if (wakeUpTime === timeBus) {
      printOut("I can catch the bus to school");
    }
  }

  for (const wakeUpTime of wakeUpTimes) {
    printOut(`Part 2: wake-up time ${wakeUpTime}`);
    if (wakeUpTime === timeBus) {
      printOut("I can take the bus to school");
    } else {
      printOut("I have to take the car to school");
    }
  }

  const timeTrain = 8;
  for (const wakeUpTime of [7, 8]) {
    printOut(`Part 3: wake-up time ${wakeUpTime}`);
    if (wakeUpTime === timeBus) {
      printOut("I can take the bus to school");
    } else if (wakeUpTime === timeTrain) {
      printOut("I can take the train to school");
    } else {
      printOut("I have to take the car to school");
    }
  }
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
{
  for (const number of [-4, 6]) {
    printOut(`Part 4: ${number}`);
    if (number < 0) {
      printOut("Negative");
    } else {
      printOut("Positive");
    }
  }

  for (const number of [-4, 0, 6]) {
    printOut(`Part 5: ${number}`);
    if (number < 0) {
      printOut("Negative");
    } else if (number > 0) {
      printOut("Positive");
    } else {
      printOut("Zero");
    }
  }
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
{
  const minimumImageSize = 4;
  const imageSize = Math.floor(Math.random() * 8) + 1;
  printOut(`Uploaded image size: ${imageSize}MP`);
  if (imageSize >= minimumImageSize) {
    printOut("Thank you");
  } else {
    printOut("The image is too small");
  }
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
{
  const minimumImageSize = 4;
  const maximumImageSize = 6;
  const imageSize = Math.floor(Math.random() * 8) + 1;
  printOut(`Uploaded image size: ${imageSize}MP`);
  if (imageSize >= maximumImageSize) {
    printOut("Image is too large");
  } else if (imageSize >= minimumImageSize) {
    printOut("Thank you");
  } else {
    printOut("The image is too small");
  }
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const monthList = [
  "January", "February", "Mars", "April", "Mai", "Jun",
  "Juli", "August", "September", "October", "November", "December"
];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(`Current month: ${monthName}`);
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
{
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
  printOut(`${monthName} has ${daysInMonth[monthName]} days`);
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
if (monthName === "April") {
  printOut("The gallery has temporary premises in the building next door");
} else if (["Mars", "Mai"].includes(monthName)) {
  printOut("The gallery is closed for refurbishment");
} else {
  printOut("The gallery is open");
}

printOut(newLine);
