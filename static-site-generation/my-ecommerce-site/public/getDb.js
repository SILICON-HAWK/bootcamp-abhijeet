const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
let db = new sqlite3.Database('./amazon_products.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});
function getTableNames() {
    db.all(`SELECT name FROM sqlite_schema WHERE type ='table' AND name NOT LIKE 'sqlite_%';`, [], (err, tables) => {
        if (err) {
            throw err;
        }
        tables.forEach((table) => {
            console.log(`Table: ${table.name}`);
            getTableStructure(table.name);
        });
    });
}

// Function to get structure of a specific table
function getTableStructure(tableName) {
    db.all(`PRAGMA table_info(${tableName});`, [], (err, columns) => {
        if (err) {
            throw err;
        }
        console.log(`Structure of ${tableName}:`);
        columns.forEach((column) => {
            console.log(`- ${column.name} (${column.type})${column.notnull ? ' NOT NULL' : ''}`);
        });
        console.log(''); // Add a newline for better readability
    });
}

// Retrieve and display all table structures
getTableNames();

// Close the database connection after a delay to allow queries to complete
setTimeout(() => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
}, 1000);