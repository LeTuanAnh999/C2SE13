'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vieclamgiaoducdb"
});

module.exports = db
