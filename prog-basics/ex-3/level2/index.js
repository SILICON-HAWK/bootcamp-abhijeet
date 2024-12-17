#!/usr/bin/env node
const chalk = require("chalk");
const { add, multiply, divide } = require("./mathutils/mathutils");
const logger = require("./logutils/logger");

// Extract the operation and numbers from command-line arguments
const [operation, ...args] = process.argv.slice(2);

// Convert arguments to numbers and validate
const numbers = args.map(Number).filter((num) => !isNaN(num));

logger.info("Program started"); // Log the start of the program

// Validate input
if (!operation || numbers.length === 0) {
  logger.error("Usage: compute <add|multiply|divide> <numbers...>");
  process.exit(1);
}

// Perform operations
let result;

try {
  if (operation === "add") {
    result = add(numbers);
    logger.info("Addition operation successful");
  } else if (operation === "multiply") {
    result = multiply(numbers);
    logger.info("Multiplication operation successful");
  } else if (operation === "divide") {
    result = divide(numbers);
    logger.info("Division operation successful");
  } else {
    logger.warn(`Invalid operation: ${operation}`);
    console.error(chalk.red("Invalid operation. Use 'add', 'multiply', or 'divide'."));
    process.exit(1);
  }

  // Log the result
  console.log(chalk.green(`The result of ${operation} is: ${result}`));
} catch (error) {
  logger.error(`Error occurred: ${error.message}`);
  process.exit(1);
}
