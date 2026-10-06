"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
{
	let countingUpLine = "Counting up: ";
	for (let number = 1; number <= 10; number++) {
		countingUpLine += `${number}${number < 10 ? " " : ""}`;
	}
	printOut(countingUpLine);

	let countingDownLine = "Counting down: ";
	for (let number = 10; number >= 1; number--) {
		countingDownLine += `${number}${number > 1 ? " " : ""}`;
	}
	printOut(countingDownLine);
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
{
	const targetNumber = 45;
	let guessedNumber = 0;

	while (guessedNumber !== targetNumber) {
		guessedNumber = Math.floor(Math.random() * 60) + 1;
	}

	printOut(`The computer guessed ${guessedNumber}.`);
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
{
	const targetNumber = 45;
	let guessedNumber = 0;
	let guessCount = 0;
	const startTime = Date.now();

	while (guessedNumber !== targetNumber) {
		guessedNumber = Math.floor(Math.random() * 1_000_000) + 1;
		guessCount++;
	}

	const elapsedMilliseconds = Date.now() - startTime;
	printOut(`The computer guessed ${guessedNumber} in ${guessCount} guesses and ${elapsedMilliseconds} ms.`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
{
	let primeNumbers = "Prime numbers below 200: ";

	for (let candidate = 2; candidate < 200; candidate++) {
		let divisor = 2;
		let isPrime = true;

		while (divisor <= Math.sqrt(candidate) && isPrime) {
			if (candidate % divisor === 0) {
				isPrime = false;
			}
			divisor++;
		}

		if (isPrime) {
			primeNumbers += `${candidate} `;
		}
	}

	printOut(primeNumbers.trim());
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
{
	for (let row = 1; row <= 7; row++) {
		let rowText = "";

		for (let column = 1; column <= 9; column++) {
			rowText += `${column === 1 ? "" : " "} K${column}R${row}`;
		}

		printOut(rowText);
	}
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
{
	for (let student = 1; student <= 5; student++) {
		const points = Math.floor(Math.random() * 236) + 1;
		const percentage = (points / 236) * 100;
		let letterGrade;

		if (percentage >= 89) {
			letterGrade = "A";
		} else if (percentage >= 77) {
			letterGrade = "B";
		} else if (percentage >= 65) {
			letterGrade = "C";
		} else if (percentage >= 53) {
			letterGrade = "D";
		} else if (percentage >= 41) {
			letterGrade = "E";
		} else {
			letterGrade = "F";
		}

		printOut(`Student ${student}: ${points}/236 points (${percentage.toFixed(1)}%) — grade ${letterGrade}`);
	}
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
{
	function rollDice() {
		return Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
	}

	function getFaceCounts(dice) {
		const faceCounts = Array(7).fill(0);
		for (const die of dice) {
			faceCounts[die]++;
		}
		return faceCounts;
	}

	function countThrowsUntil(description, isTargetRoll) {
		let throwCount = 0;
		let dice;

		do {
			dice = rollDice();
			throwCount++;
		} while (!isTargetRoll(dice, getFaceCounts(dice)));

		printOut(`${description}: ${throwCount} throws (final roll: ${dice.join(", ")})`);
	}

	countThrowsUntil("Full straight (1-6)", (dice, faceCounts) =>
		dice.length === 6 && faceCounts.slice(1).every((count) => count === 1)
	);

	countThrowsUntil("Three pairs", (_dice, faceCounts) =>
		faceCounts.slice(1).filter((count) => count === 2).length === 3
	);

	countThrowsUntil("Tower (one pair and one four-of-a-kind)", (_dice, faceCounts) =>
		faceCounts.slice(1).includes(2) && faceCounts.slice(1).includes(4)
	);

	countThrowsUntil("Yahtzee (all the same)", (_dice, faceCounts) =>
		faceCounts.slice(1).some((count) => count === 6)
	);
}

printOut(newLine);
