require("dotenv").config();
const sqlite3 = require("sqlite3").verbose();
const logger = require("./utils/logger"); // Import the logger

// Environment Variables
const DB_FILE = process.env.DB_FILE || "default.db";
const db = new sqlite3.Database(DB_FILE, (err) => {
    if (err) {
        logger.error(`Failed to connect to database: ${err.message}`);
        return;
    }
    logger.info(`Connected to SQLite database: ${DB_FILE}`);
});

// Example function: Create table
function createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL
        )`;

    db.run(sql, (err) => {
        if (err) {
            logger.error(`Error creating table: ${err.message}`);
        } else {
            logger.info("Users table created successfully.");
        }
    });
}

// Example function: Insert data
function insertUser(name, email) {
    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(sql, [name, email], function (err) {
        if (err) {
            logger.error(`Error inserting user: ${err.message}`);
        } else {
            logger.info(`User inserted with ID: ${this.lastID}`);
        }
    });
}

// Example function: Query data
function getUsers() {
    const sql = `SELECT * FROM users`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            logger.error(`Error querying users: ${err.message}`);
        } else {
            logger.info(`Retrieved ${rows.length} user(s) from the database.`);
            console.log("Users:", rows);
        }
    });
}

// Main Program
logger.info("Starting database operations...");
createTable();
insertUser("Abhijeet", "abhijeet@example.com");
getUsers();

// Close the database
db.close((err) => {
    if (err) {
        logger.error(`Error closing database: ${err.message}`);
    } else {
        logger.info("Database connection closed.");
    }
});
