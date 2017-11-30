var pg = require("pg");

var pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "to-do",
    ssl: false
});

module.exports = pool;