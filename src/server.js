let io = require('socket.io');
let mysql = require('mysql');
let http = require('http');
let server = http.createServer();
server.listen(80, "18.207.108.5");
let socket = io.listen(server);



// IP of AWS server 18.207.108.5