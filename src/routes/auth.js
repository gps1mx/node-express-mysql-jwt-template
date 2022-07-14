const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

const {verifyToken} = require('../functions')
const jwt = require('jsonwebtoken');

router.post('/api/login', (req, res) => {
	const user = {
		id: 1,
		nombre: "Henry",
		email: "henry@email.com",
	}
	jwt.sign({user: user}, process.env.TOKEN_SECRET, { expiresIn: '36000s' }, (err, token) => {
		res.json({
			token,
		})
	})
});

module.exports = router;
