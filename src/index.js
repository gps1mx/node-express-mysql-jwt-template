const express = require('express');
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Settings
app.set('port', process.env.PORT || 3999);

// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.use(require('./routes/auth'));
// app.use(require('./routes/relacion_bases'));
// app.use(require('./routes/protectedRoute'));
app.use(require('./routes/loginTrabajador'));
app.use(require('./routes/nominaFinanzasGuerreroTrabajadores'));



// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
