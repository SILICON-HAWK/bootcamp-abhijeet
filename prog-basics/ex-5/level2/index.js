const dotenv = require("dotenv");
dotenv.config();

// Function to handle missing variables
function getEnvVariable(key, fallback) {
    if (!process.env[key]) {
        console.warn(`Warning: Missing environment variable ${key}. Using fallback: ${fallback}`);
    }
    return process.env[key] || fallback;
}

// Retrieve environment variables with fallbacks
const port = getEnvVariable("PORT", 8000);
const dbHost = getEnvVariable("DB_HOST", "127.0.0.1");
const dbUser = getEnvVariable("DB_USER", "root");
const dbPassword = getEnvVariable("DB_PASSWORD", "password");

console.log(`Server will run on port: ${port}`);
console.log(`Database host: ${dbHost}`);
console.log(`Database user: ${dbUser}`);
