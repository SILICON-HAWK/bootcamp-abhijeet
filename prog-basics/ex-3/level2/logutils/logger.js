const { createLogger, format, transports } = require("winston");

// Define the logger with console and file transports
const logger = createLogger({
  level: "info", // Default log level
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Add timestamps
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(), // Add colors for console
        format.simple() // Simple console output
      )
    }),
    new transports.File({ filename: "program.log" }) // Log to a file
  ],
});

module.exports = logger;
