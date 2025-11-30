const mysql = require("mysql");
require("dotenv").config();

const conexion = mysql.createPool({
  connectionLimit: 16,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port:process.env.PORT,
  multipleStatements: true,
});

module.exports = {
  conexion,
};
