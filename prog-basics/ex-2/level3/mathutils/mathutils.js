// mathutils.js

// Function to add an array of numbers
function add(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to multiply an array of numbers
function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Export the functions for reuse
module.exports = { add, multiply };
