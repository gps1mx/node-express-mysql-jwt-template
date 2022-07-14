# node-express-mysql-jwt-template

Node, Express, Mysql and JWT template

Mainly based on Fazt repo: https://github.com/FaztWeb/mysql-nodejs-rest-api.git

Is needed to create a .env file, inside this file put the folowing lines:

TOKEN_SECRET=18cfb303ae19401a600a3c6f9... 
MYSQL_USERNAME=my_mysql_username
MYSQL_PASSWORD=my_mysql_password
MYSQL_DATABASE=my_mysql_database
MYSQL_HOST=my_mysql_host

Replace the 18cfb303ae19401a600a3c6f9... with a real secret string. It could be created by running in a node console: require('crypto').randomBytes(64).toString('hex') 

Also, replace the anothers params with your own.

You must run npm install to install the dependencies.

To test the app, you must install the 'company' database (sql in db folder) and run node src/index.js
