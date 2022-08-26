const pool = require('../database');

let regreso = {};

regreso.relacionBasesTodas = () => {
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

regreso.relacionBasesActivas = () => {
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM relacion_bases where activo = ?', [1], (err, results) => {
			if (!err) {
				return resolve(results);
			} else {
				reject(err);
			}
		});
	});
}

regreso.relacionBasesId = (id) => {
	// const { id } = req.params;
	return new Promise((resolve, reject) => {
		pool.query('SELECT * FROM relacion_bases where id_base = ?', [id], (err, results) => {
			if (!err) {
				return resolve(results);
			} else {
				reject(err);
			}
		});
	});
}

module.exports = { regreso };