const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));
app.use(require('./routes/auth'));
app.use(require('./routes/protectedRoute'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
