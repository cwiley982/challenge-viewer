let mysql = require('mysql');
let db;
let userData;
let database = 'sjVokhoF61';
let userTable = 'Users';

class DatabaseAPI {
    constructor() {
        // Remote SQL server
        db = mysql.createConnection({
            host: "remotemysql.com",
            user: "sjVokhoF61",
            password: "qOMReXqbwb",
            database: "sjVokhoF61"
        });

        userData = db.query(getUsers.sql);
    }
}

setInterval(() => {

}, 10 * 60 * 1000); // refresh every 10 minutes