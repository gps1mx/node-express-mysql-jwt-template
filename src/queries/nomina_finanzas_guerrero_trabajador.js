const pool = require('../database');

let regreso = {};

regreso.trabajador4 = (rfc, clave_presupuestal, quincena) => {
	return new Promise((resolve, reject) => {
		const query = `SELECT * FROM nomina_finanzas_guerrero_trabajador where rfc=? and clave_presupuestal=? and quincena=?`;
		pool.query(query, [rfc, clave_presupuestal, quincena], (err, results) => {
			if (!err) {
				return resolve(results);
			} else {
				reject(err);
			}
		});
	});
}



module.exports = { regreso };