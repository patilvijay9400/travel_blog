const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: process.env.MASTER_DB_HOST,
  user: process.env.MASTER_DB_USER,
  password: process.env.MASTER_DB_PASSWORD,
  database: process.env.MASTER_DB_NAME,
  port: process.env.MASTER_DB_PORT,
  ssl: false
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
