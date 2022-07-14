const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
const { verifyToken } = require('../functions')
const jwt = require('jsonwebtoken');


// GET all Employees
router.get('/protected/api/', verifyToken, (req, res) => {
	jwt.verify(req.token, process.env.TOKEN_SECRET, (err, auth) => {
		if (err) {
			res.sendStatus(403)
		} else {
			mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
				if (!err) {
					res.json(rows); // <-- This is the original line
				} else {
					console.log(err);
				}
			});
		}
	})

});


module.exports = router;
