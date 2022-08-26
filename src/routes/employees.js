const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
const { verifyToken } = require('../functions')
const jwt = require('jsonwebtoken');

// Default route
router.get('/', (req, res) => {
  res.json({ msg: '(Not) Welcome!' });
});

// GET all Employees
router.get('/api/', (req, res) => {
  mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
    if (!err) {
      res.json(rows); // <-- This is the original line
    } else {
      console.log(err);
    }
  });
});

// GET An Employee
router.get('/api/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/api/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM employee WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Employee Deleted' });
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/api/', (req, res) => {
  const { id, name, salary } = req.body;
  console.log(id, name, salary);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Employeed Saved' });
    } else {
      console.log(err);
    }
  });

});

router.put('/api/:id', (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Employee Updated' });
    } else {
      console.log(err);
    }
  });
});

router.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.TOKEN_SECRET, (err, auth) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        msg: 'Post fue creado',
        auth,
      })
    }
  })
})

module.exports = router;
