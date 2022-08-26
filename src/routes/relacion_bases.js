const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
const { regreso } = require('../queries/relacion_bases_queries');

// GET all from relacion_bases
router.get('/relacion_bases/todas', async (req, res) => {
	try {
		let results = await regreso.relacionBasesTodas();
		res.json(results);
	} catch (err) {
		console.log(err);
	}
});

// GET all from relacion_bases, only the active ones
router.get('/relacion_bases/activas', async (req, res) => {
	try {
		let results = await regreso.relacionBasesActivas();
		res.json(results);
	} catch (err) {
		console.log(err);
	}
});

router.get('/relacion_bases/id/:id', async (req, res) => {
	const id = req.params.id;
	try {
		let results = await regreso.relacionBasesId(id);
		res.json(results);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
