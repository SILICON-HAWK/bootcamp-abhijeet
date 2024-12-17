#!/usr/bin/env node
const chalk = require("chalk");
const { add, multiply } = require("./mathutils/mathutils");

// Extract the operation and numbers from command-line arguments
const [operation, ...args] = process.argv.slice(2);

// Convert arguments to numbers and validate
const numbers = args.map(Number).filter((num) => !isNaN(num));

// Validate input
if (!operation || numbers.length === 0) {
  console.error(chalk.red("Usage: compute <add|multiply> <numbers...>"));
  process.exit(1);
}

// Perform the operation
let result;

if (operation === "add") {
  result = add(numbers);
} else if (operation === "multiply") {
  result = multiply(numbers);
} else {
  console.error(chalk.red("Invalid operation. Use 'add' or 'multiply'."));
  process.exit(1);
}

// Display the result
console.log(chalk.green(`The result of ${operation} is: ${result}`));

