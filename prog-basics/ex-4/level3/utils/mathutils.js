const debug = require("debug")("mathutils");
const { createLogger, transports, format } = require("winston");

// Setup Winston Logger
const logger = createLogger({
    level: "info",
    format: format.combine(format.timestamp(), format.simple()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: "app.log" }),
    ],
});

function add(numbers) {
    debug(`Adding numbers: ${numbers}`);
    logger.info(`Adding numbers: ${numbers}`);
    return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply(numbers) {
    debug(`Multiplying numbers: ${numbers}`);
    logger.info(`Multiplying numbers: ${numbers}`);
    return numbers.reduce((acc, num) => acc * num, 1);
}

function divide(numbers) {
    debug(`Dividing numbers: ${numbers}`);
    logger.info(`Dividing numbers: ${numbers}`);
    if (numbers.includes(0)) {
        const errorMsg = "Cannot divide by zero.";
        debug(errorMsg);
        logger.error(errorMsg);
        throw new Error(errorMsg);
    }
    return numbers.reduce((acc, num) => acc / num);
}

module.exports = { add, multiply, divide };
