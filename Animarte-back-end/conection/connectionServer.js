const mysql = require('mysql');
require('dorenv').config({path:'../env'})

const mysqlConnection = mysql.createConnection({
    hdatabase: '',
    user: '',
    host: '',
    password: '',
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