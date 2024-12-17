// Function to add an array of numbers
function add(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to multiply an array of numbers
function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

// Function to divide an array of numbers (handles division by zero)
function divide(numbers) {
    if (numbers.includes(0)) {
        throw new Error("Cannot divide by zero.");
    }
    return numbers.reduce((acc, num) => acc / num);
}

// Export the functions for reuse
module.exports = { add, multiply, divide };
