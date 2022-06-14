
const prompt = require('prompt-sync')();

let input = prompt('Please enter a number or type [done]:');
let sum = 0;

while (input !== 'done') {
    sum = sum + Number(input);
    input = prompt('Please enter a number or type [done]:')
}

console.log('Sum:', sum);
