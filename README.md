# node-express-mysql-jwt-template

Node, Express, Mysql and JWT template

Mainly based on Fazt repo: https://github.com/FaztWeb/mysql-nodejs-rest-api.git

Is needed to create a .env file, inside this file put the folowing line:

TOKEN_SECRET=18cfb303ae19401a600a3c6f9... 

Replace the 18cfb303ae19401a600a3c6f9... with a real secret string. It could be created by running in a node console: require('crypto').randomBytes(64).toString('hex') 

It's neccessary to update database.js to replace the params to connect to the database.
