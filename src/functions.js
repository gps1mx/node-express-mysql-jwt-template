const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function verifyToken(req, res, next) {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1]
		try {
			jwt.verify(bearerToken, process.env.TOKEN_SECRET)
			next();
		} catch (error) {
			res.sendStatus(403)
		}
	} else {
		res.sendStatus(403)
	}
}

function decodeToken(token) {
	try {
		const decoded = jwt.decode(token, process.env.TOKEN_SECRET)
		return decoded;
	} catch (error) {
		console.log('decodeToken error')
	}
}

module.exports = {
	verifyToken,
	decodeToken
};