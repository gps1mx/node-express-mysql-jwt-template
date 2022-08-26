const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

let regreso = {};

regreso.relacionBasesAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM relacion_bases', (err, results) => {
      if (!err) {
        return resolve(results);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = pool
