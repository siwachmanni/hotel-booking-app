const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('Azure SQL connected');
  } catch (err) {
    console.error('SQL connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = { connectDB, sql };