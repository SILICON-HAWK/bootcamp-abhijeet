// Exercise 1 

console.log("hello node is working properly")

const chalk = require('chalk');

console.log(chalk.green("Hello, Node.js!"));
console.log(chalk.green("This script is using nodemon to automatically update the output if this file is changed."));
console.log(chalk.blue("This is a styled output using chalk."));
console.log(chalk.blue("This script has a prestart script to check if node_modules exists or not."));
console.log(chalk.red("use \"nodemondev\" instead of \"dev\" as dev keyword is already used by another script."));
