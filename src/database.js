const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'MY_MYSQL_USERNAME',
  password: 'MY_SUPER_SECRET_PASSWORD',
  database: 'MY_DATABASE_NAME',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
