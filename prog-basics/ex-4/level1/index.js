const debug = require("debug")("main");
const { add, multiply, divide } = require("./utils/mathutils");

// Function to display usage
function showHelp() {
    console.log(`
Usage:
    node index.js <command> [arguments]

Commands:
    add [numbers]        - Add a list of numbers.
    multiply [numbers]   - Multiply a list of numbers.
    divide [numbers]     - Divide a list of numbers (no zero allowed).

Examples:
    node index.js add 1 2 3
    node index.js multiply 4 5 6
    node index.js divide 10 2
`);
}

// Parse command-line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
    showHelp();
    process.exit(1);
}

const command = args[0];
const numbers = args.slice(1).map((num) => {
    const parsed = Number(num);
    if (isNaN(parsed)) {
        console.error(`Error: '${num}' is not a valid number.`);
        process.exit(1);
    }
    return parsed;
});

debug("Command received:", command);
debug("Arguments:", numbers);

// Main logic to handle commands
try {
    switch (command) {
        case "add":
            console.log("Result of addition:", add(numbers));
            break;
        case "multiply":
            console.log("Result of multiplication:", multiply(numbers));
            break;
        case "divide":
            console.log("Result of division:", divide(numbers));
            break;
        default:
            console.error(`Error: Unknown command '${command}'.`);
            showHelp();
    }
} catch (error) {
    console.error("An error occurred:", error.message);
    debug("Error Details:", error);
}
