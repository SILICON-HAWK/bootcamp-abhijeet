const debug = require("debug")("interactive");
const { add, multiply, divide } = require("./mathutils");

// Function to simulate interactive inputs
function runInteractive() {
    const numbers = [10, 5];
    debug(`${new Date().toISOString()} - Starting interactive session`);
    try {
        console.log("Add:", add(numbers));
        console.log("Multiply:", multiply(numbers));
        console.log("Divide:", divide(numbers));
    } catch (error) {
        debug(`${new Date().toISOString()} - Error occurred: ${error.message}`);
        console.error("Error:", error.message);
    }
    debug(`${new Date().toISOString()} - Interactive session completed`);
}

module.exports = { runInteractive };
