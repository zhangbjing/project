var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3231996',
    database: 'test',
    insecureAuth: true
});
connection.connect(err => {
    if(err) { 
        throw err;
    }
});
module.exports = connection
