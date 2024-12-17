const debug = require("debug")("mathutils"); // Debug namespace for mathutils

// Function to get the current timestamp
function getTimestamp() {
    return new Date().toISOString();
}

// Function to add an array of numbers
function add(numbers) {
    debug(`${getTimestamp()} - Adding numbers: ${numbers}`);
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to multiply an array of numbers
function multiply(numbers) {
    debug(`${getTimestamp()} - Multiplying numbers: ${numbers}`);
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to divide an array of numbers (handles division by zero)
function divide(numbers) {
    debug(`${getTimestamp()} - Dividing numbers: ${numbers}`);
    if (numbers.includes(0)) {
        debug(`${getTimestamp()} - Error: Cannot divide by zero.`);
        throw new Error("Cannot divide by zero.");
    }
    return numbers.reduce((acc, num) => acc / num);
}

// Export the functions for reuse
module.exports = { add, multiply, divide };
