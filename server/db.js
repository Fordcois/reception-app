const { Pool } = require("pg");
require("dotenv").config();

// Database configuration object
const dbConfig = {
  user: process.env.DB_USER,        
  password: process.env.DB_PASSWORD, 
  host: process.env.DB_HOST,        
  port: process.env.DB_PORT, 
  database: process.env.DB_NAME,    
};

const pool = new Pool(dbConfig);

console.log(`Connecting to Database ${dbConfig.database} on PORT:${dbConfig.port}`);

// Test the connection
pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Successfully connected to database');
  }
});

module.exports = pool;