const {Pool} = require("pg");
require('dotenv').config();

const pool= new Pool ({
    host: "localhost",
    user: "postgres",
    database: "newdb",
    password:"12345",
    port: "5432"

});

module.exports = pool;

