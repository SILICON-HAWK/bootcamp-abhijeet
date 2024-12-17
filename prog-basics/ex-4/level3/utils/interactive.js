const debug = require("debug")("interactive");
const { add, multiply, divide } = require("./mathutils");

function runInteractive() {
    const numbers = [10, 5];
    debug("Starting interactive session");
    console.log("Results:");
    try {
        console.log("Add:", add(numbers));
        console.log("Multiply:", multiply(numbers));
        console.log("Divide:", divide(numbers));
    } catch (error) {
        debug(`Error: ${error.message}`);
    }
    debug("Interactive session completed");
}

module.exports = { runInteractive };
