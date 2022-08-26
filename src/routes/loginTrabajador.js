const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
const { verifyToken, decodeToken } = require('../functions')
const jwt = require('jsonwebtoken');

// This one works!
// Needs a raw json object with the requested data
// {
//		"rfc": "AUHF6901085B5",
//		"clave_presupuestal": "60063",
//		"quincena": "2211"
//	}
// Also needs a bearer token on the authorization section
router.post('/trabajador', (req, res) => {
	const query = `SELECT * FROM nomina_finanzas_guerrero_trabajador where rfc=? and clave_presupuestal=? and quincena=?`;
	const values = [req.body.rfc, req.body.clave_presupuestal, req.body.quincena];
	const token = req.headers['authorization'].split(' ')[1]
	jwt.verify(token, process.env.TOKEN_SECRET, (err, auth) => {
		if (err) {
			res.sendStatus(403)
		} else {
			const queryResult = mysqlConnection.query(query, values, (err, rows, fields) => {
				if (!err) {
					res.json(rows[0]);
				} else {
					console.log(err);
				}
			});
		}
	})
});

// Works, now with a function
router.post('/trabajador2', verifyToken, (req, res) => {
	const query = `SELECT * FROM nomina_finanzas_guerrero_trabajador where rfc=? and clave_presupuestal=? and quincena=?`;
	const values = [req.body.rfc, req.body.clave_presupuestal, req.body.quincena];
	const token = req.headers['authorization'].split(' ')[1]
	const queryResult = mysqlConnection.query(query, values, (err, rows, fields) => {
		if (!err) {
			res.json(rows[0]);
		} else {
			console.log(err);
		}
	});
})

// Works, now can return an object with the user identification
// allowing us to register their data
router.post('/trabajador3', verifyToken, (req, res) => {
	const query = `SELECT * FROM nomina_finanzas_guerrero_trabajador where rfc=? and clave_presupuestal=? and quincena=?`;
	const values = [req.body.rfc, req.body.clave_presupuestal, req.body.quincena];
	const token = req.headers['authorization'].split(' ')[1]
	const decoded = jwt.decode(token, process.env.TOKEN_SECRET)
	const queryResult = mysqlConnection.query(query, values, (err, rows, fields) => {
		if (!err) {
			const regreso = [rows[0], decoded]
			res.json(regreso);
		} else {
			console.log(err);
		}
	});
})

module.exports = router;
