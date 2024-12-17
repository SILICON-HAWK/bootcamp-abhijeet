// index.js
const chalk = require("chalk");

// Extract command-line arguments starting from index 2
const args = process.argv.slice(2);

// Function to display help instructions
function showHelp() {
  console.log(`
  Usage: node index.js [--multiply] <numbers...>

  Options:
    --multiply   Multiply the provided numbers instead of adding them.
    --help       Show this help message.

  Examples:
    node index.js 1 2 3
    node index.js --multiply 2 3 4
  `);
}

// Function to check if a value is a valid number
function isValidNumber(value) {
  return !isNaN(value) && value.trim() !== "";
}

// Check for --help flag
if (args.includes("--help")) {
  showHelp();
  process.exit(0);
}

// Determine if multiply flag is set
const isMultiply = args.includes("--multiply");
const numbers = [];

// Parse and validate inputs
for (let arg of args) {
  if (arg === "--multiply") continue; // Skip the flag itself
  if (isValidNumber(arg)) {
    numbers.push(Number(arg));
  } else {
    console.error(chalk.red(`Invalid input: '${arg}' is not a valid number.`));
    process.exit(1);
  }
}

// Check if there are numbers to process
if (numbers.length === 0) {
  console.error(chalk.yellow("No valid numbers provided."));
  showHelp();
  process.exit(1);
}

// Calculate sum or product
const result = isMultiply
  ? numbers.reduce((acc, num) => acc * num, 1)
  : numbers.reduce((acc, num) => acc + num, 0);

// Display the result
const operation = isMultiply ? "product" : "sum";
console.log(chalk.green(`The ${operation} of the numbers is: ${result}`));
