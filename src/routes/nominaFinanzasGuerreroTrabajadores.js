const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
const { regreso } = require('../queries/nomina_finanzas_guerrero_trabajador');
const { verifyToken, decodeToken } = require('../functions.js');

router.post('/trabajador4', verifyToken, async (req, res) => {
	try {
		const decoded = decodeToken(req.headers['authorization'].split(' ')[1])
		const { rfc, clave_presupuestal, quincena } = req.body
		let results = await regreso.trabajador4(rfc, clave_presupuestal, quincena);
		// Log the query, with "decoded"
		res.json([results, decoded]);
	} catch (err) {
		// Log the error, with "decoded"
		console.log(err);
	}
});

module.exports = router;
