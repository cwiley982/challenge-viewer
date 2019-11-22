let socket = require('socket.io');
let mysql = require('mysql');
let io = socketIO(5000, {
    path: '/',
    serveClient: false
});

// Remote SQL server
let con = mysql.createConnection({
    host: "remotemysql.com",
    user: "sjVokhoF61",
    password: "qOMReXqbwb",
    database: "sjVokhoF61"
});

// IP of AWS server 18.207.108.5