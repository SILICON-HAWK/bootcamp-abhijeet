// generateFuseIndex.js
const sqlite3 = require('sqlite3').verbose();
const Fuse = require('fuse.js');
const fs = require('fs');

let db = new sqlite3.Database('./amazon_products.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});
const fetchProductsFromTable = (tableName) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM ${tableName}`, [], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const fetchTableNames = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT name FROM sqlite_master WHERE type='table';", [], (err, rows) => {
            if (err) reject(err);
            resolve(rows.map(row => row.name));
        });
    });
};

const generateIndex = async () => {
    try {
        const tableNames = await fetchTableNames();
        const products = await Promise.all(tableNames.map(fetchProductsFromTable));
        const flatProducts = products.flat();

        // Create the Fuse index
        const options = { keys: ['name', 'sub_category', 'main_category'] };
        const fuseIndex = Fuse.createIndex(options.keys, flatProducts);

        // Serialize and save the index
        fs.writeFileSync('fuse-index.json', JSON.stringify(fuseIndex.toJSON()));
        fs.writeFileSync('fuse-data.json', JSON.stringify(flatProducts)); // Save product data as well

        console.log('Fuse index generated successfully.');
    } catch (error) {
        console.error('Error generating index:', error);
    } finally {
        db.close();
    }
};

generateIndex();
