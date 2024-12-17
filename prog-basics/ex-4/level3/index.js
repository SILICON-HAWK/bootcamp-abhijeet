const debug = require("debug")("main");
const { add, multiply, divide } = require("./utils/mathutils");
const { runInteractive } = require("./utils/interactive");

// Function to display usage
function showHelp() {
    console.log(`
Usage:
    node index.js <command> [arguments]
    npm dev <selective debug option> <command> [args]

    Ex: npm run dev:mathutils add 10 10

    debug options include
    dev:mathutils
    dev:interactive

Examples:
    npm run dev add 1 2 3
    npm start multiply 4 5 6
    node index.js divide 10 2
    npm run dev interactive
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
        case "interactive":
            console.log("Starting interactive session...");
            runInteractive();
            break;
        default:
            console.error(`Error: Unknown command '${command}'.`);
            showHelp();
    }
} catch (error) {
    console.error("An error occurred:", error.message);
    debug("Error Details:", error);
}
