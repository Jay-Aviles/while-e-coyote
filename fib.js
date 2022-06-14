const prompt = require("prompt-sync")();

console.log('Enter a value for "n": ');
let n = Number(prompt("> "));
console.log("");

let number1 = 0;
let number2 = 1;

let sum = 0;
let count = 0;

while (count !== n) {
	console.log(number1);

	sum = number1 + number2;

	number1 = number2;

	number2 = sum;

	count = count + 1;
}

console.log("Done");