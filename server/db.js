const Pool = require("pg").Pool;
require("dotenv").config();



const dbConfig = {
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port:  process.env.DBPORT,
  database: process.env.DBNAME,
};

const pool = new Pool(dbConfig);

console.log('Connecting to Database at ${Localhost}');

module.exports = pool;