const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');

const { verifyToken } = require('../functions')
const jwt = require('jsonwebtoken');

router.post('/api/login', (req, res) => {
	const query = `SELECT id, username, nivel, active, auto_administrador_usuarios FROM usuarios_copy1 where username=? and password=? and active=1`;
	const values = [req.body.username, req.body.password];
	const queryResult = mysqlConnection.query(query, values, (err, rows, fields) => {
		if (!err) {
			jwt.sign({ user: rows[0] }, process.env.TOKEN_SECRET, { expiresIn: '1h' }, (err, token) => {
				res.json({
					token,
				})
			})
		} else {
			console.log(err);
		}
	});
});

module.exports = router;
