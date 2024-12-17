// logger.js
const { createLogger, format, transports } = require("winston");

// Define the logger with console transport
const logger = createLogger({
  level: "info", // Default log level
  format: format.combine(
    format.colorize(), // Add colors for console
    format.simple() // Simple log format
  ),
  transports: [
    new transports.Console() // Logs to the console
  ],
});

module.exports = logger;
