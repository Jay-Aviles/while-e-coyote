
const prompt = require("prompt-sync")();

console.log("Enter a number: ");
let number = Number(prompt("> "));
console.log("");

while (number < 100) {

	number = number * 2;

	console.log(number);
}
console.log("Done");
