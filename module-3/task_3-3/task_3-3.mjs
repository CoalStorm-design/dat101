"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
{
	function printTodayDate() {
		const today = new Date();
		printOut(today.toLocaleDateString("no-NB", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		}));
	}

	printTodayDate();
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
{
	function getTodayDate() {
		const today = new Date();
		printOut(`Today's date: ${today.toLocaleDateString("no-NB", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		})}`);
		return today;
	}

	function daysUntilRelease(today, releaseDate) {
		const millisecondsPerDay = 24 * 60 * 60 * 1000;
		const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
		const releaseUtc = Date.UTC(releaseDate.getUTCFullYear(), releaseDate.getUTCMonth(), releaseDate.getUTCDate());
		return Math.round((releaseUtc - todayUtc) / millisecondsPerDay);
	}

	const today = getTodayDate();
	const releaseDate = new Date("2025-05-14T00:00:00Z");
	const daysLeft = daysUntilRelease(today, releaseDate);

	if (daysLeft > 0) {
		printOut(`2XKO launches in ${daysLeft} days!`);
	} else if (daysLeft === 0) {
		printOut("2XKO launches today!");
	} else {
		printOut(`The 2XKO launch date was ${Math.abs(daysLeft)} days ago.`);
	}
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
{
	function printCircleMeasurements(radius) {
		const diameter = 2 * radius;
		const circumference = 2 * Math.PI * radius;
		const area = Math.PI * radius ** 2;
		printOut(`Radius ${radius}: diameter ${diameter}, circumference ${circumference.toFixed(2)}, area ${area.toFixed(2)}`);
	}

	printCircleMeasurements(5);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
{
	function printRectangleMeasurements({ width, height }) {
		const circumference = 2 * (width + height);
		const area = width * height;
		printOut(`Rectangle ${width} × ${height}: circumference ${circumference}, area ${area}`);
	}

	printRectangleMeasurements({ width: 8, height: 4 });
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
{
	function printTemperatureConversions(temperature, temperatureType) {
		const type = temperatureType.toUpperCase();
		let celsius;

		if (type === "C") {
			celsius = temperature;
		} else if (type === "F") {
			celsius = (temperature - 32) * 5 / 9;
		} else if (type === "K") {
			celsius = temperature - 273.15;
		} else {
			printOut(`Unknown temperature type: ${temperatureType}`);
			return;
		}

		const fahrenheit = celsius * 9 / 5 + 32;
		const kelvin = celsius + 273.15;
		printOut(`${temperature}°${type} = ${Math.round(celsius)}°C, ${Math.round(fahrenheit)}°F, ${Math.round(kelvin)} K`);
	}

	printTemperatureConversions(25, "C");
	printTemperatureConversions(77, "F");
	printTemperatureConversions(300, "K");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
{
	function calculateNetPrice(grossPrice, vatGroup) {
		const vatRates = {
			normal: 25,
			food: 15,
			hotel: 10,
			transport: 10,
			cinema: 10
		};
		const vatRate = vatRates[vatGroup.toLowerCase()];

		if (vatRate === undefined) {
			printOut("Unknown VAT group!");
			return NaN;
		}

		return (100 * grossPrice) / (vatRate + 100);
	}

	printOut(`Normal VAT: net price ${calculateNetPrice(125, "normal").toFixed(2)}`);
	printOut(`Food VAT: net price ${calculateNetPrice(115, "FOOD").toFixed(2)}`);
	printOut(`Cinema VAT: net price ${calculateNetPrice(110, "cinema").toFixed(2)}`);
	const unknownNetPrice = calculateNetPrice(100, "goblins");
	printOut(`Unknown group result: ${unknownNetPrice}`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
{
	function calculateSpeedDistanceOrTime(distance, time, speed) {
		const missingCount = [distance, time, speed].filter((value) => value === undefined).length;
		if (missingCount !== 1) {
			return NaN;
		}

		if (speed === undefined) {
			return distance / time;
		}
		if (time === undefined) {
			return distance / speed;
		}
		return speed * time;
	}

	printOut(`Speed (distance 150, time 3): ${calculateSpeedDistanceOrTime(150, 3, undefined)}`);
	printOut(`Time (distance 150, speed 50): ${calculateSpeedDistanceOrTime(150, undefined, 50)}`);
	printOut(`Distance (time 3, speed 50): ${calculateSpeedDistanceOrTime(undefined, 3, 50)}`);
	printOut(`Invalid with two missing values: ${calculateSpeedDistanceOrTime(150, undefined, undefined)}`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
{
	function padText(text, maximumSize, paddingCharacter, addBefore) {
		const paddingSize = Math.max(0, maximumSize - text.length);
		const padding = paddingCharacter.repeat(paddingSize);
		return addBefore ? padding + text : text + padding;
	}

	printOut(padText("JavaScript", 16, "*", true));
	printOut(padText("Loops", 12, "-", false));
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
{
	function checkNumberPattern(numberOfLines) {
		let nextNumber = 1;

		for (let line = 1; line <= numberOfLines; line++) {
			let leftSum = 0;
			let rightSum = 0;

			for (let term = 0; term <= line; term++) {
				leftSum += nextNumber;
				nextNumber++;
			}
			for (let term = 0; term < line; term++) {
				rightSum += nextNumber;
				nextNumber++;
			}

			if (leftSum !== rightSum) {
				printOut(`Pattern failed on line ${line}: left sum ${leftSum}, right sum ${rightSum}.`);
				return false;
			}
		}

		printOut("Maths fun!");
		return true;
	}

	checkNumberPattern(200);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
{
	function factorial(number) {
		if (!Number.isInteger(number) || number < 0) {
			return NaN;
		}
		if (number <= 1) {
			return 1;
		}
		return number * factorial(number - 1);
	}

	printOut(`6! = ${factorial(6)}`);
}

printOut(newLine);
