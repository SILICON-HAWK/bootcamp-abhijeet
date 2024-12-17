const { createLogger, format, transports } = require("winston");
const path = require("path");

// Create a Winston logger instance
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: path.join(__dirname, "database.log"), // Log file path
        }),
    ],
});

module.exports = logger;
