const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    hdatabase: 'nahuel-database',
    user: 'yqh8tg9tux6urokqp9ey',
    host: 'aws.connect.psdb.cloud',
    password: 'pscale_pw_jXIBw6Dnq2gWzFJY7KaTzQpExrloitNTIesCgnG19gx',
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