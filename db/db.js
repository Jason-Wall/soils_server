// PG database client/connection setup
require('dotenv').config();
const { Pool } = require('pg');

const dbParams = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
