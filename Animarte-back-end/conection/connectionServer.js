const mysql = require('mysql');
require('dotenv').config()

const mysqlConnection = mysql.createConnection({
    hdatabase: process.env.HDATABASE,
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
})

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log(`Conectado a la base de Datos`)
    }
})

module.exports = mysqlConnection;