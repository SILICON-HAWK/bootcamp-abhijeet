const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();

// Use environment variables in the program
const port = process.env.PORT || 8000;
const dbHost = process.env.DB_HOST;

console.log(`Server will run on port: ${port}`);
console.log(`Database host: ${dbHost}`);
