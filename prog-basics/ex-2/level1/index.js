// index.js
const chalk = require("chalk");

// Extract command-line arguments starting from index 2
const args = process.argv.slice(2);

// Function to check if a value is a valid number
function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== "";
}

// Parse and validate inputs
const numbers = [];
for (let arg of args) {
  if (isValidNumber(arg)) {
    numbers.push(Number(arg));
  } else {
    console.error(chalk.red(`Invalid input: '${arg}' is not a valid number.`));
    process.exit(1); // Exit with an error code
  }
}

// Calculate the sum
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Display the result
console.log(chalk.green(`The sum of the numbers is: ${sum}`));
