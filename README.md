# node-express-mysql-jwt-template

Node, Express, Mysql and JWT template

Mainly based on Fazt repo: https://github.com/FaztWeb/mysql-nodejs-rest-api.git

You must run npm install to install the dependencies.

### a option: use an .env file

Is needed to create a .env file, inside this file put the folowing lines:

```
TOKEN_SECRET=18cfb303ae19401a600a3c6f9...
MYSQL_USERNAME=my_mysql_username
MYSQL_PASSWORD=my_mysql_password
MYSQL_DATABASE=my_mysql_database
MYSQL_HOST=my_mysql_host
```

After that, you can run the app with `nodemon src/index.js`

### b option: use the ecosystem.config.js file and pm2

Is needed to create a `ecosystem.config.js` file, inside this file put the folowing lines:

```
module.exports = {
  apps : [{
    name   : "my_app",
    script : "src/index.js",
    watch: true,
    ignore_watch : [
      "node_modules",
    ],
    env: {
      "TOKEN_SECRET":"18cfb303ae19401a600a3c6f9...",
      "MYSQL_USERNAME":"my_mysql_username",
      "MYSQL_PASSWORD":"my_mysql_password",
      "MYSQL_DATABASE":"my_mysql_database",
      "MYSQL_HOST":"my_mysql_host",
      "PORT":"my_port",
    },
  }]
}
```

It's needed to install pm2 with `npm install pm2 -g`

After that, you can run the app with `pm2 start ecosystem.config.js` within the project folder

### Notes

Replace the 18cfb303ae19401a600a3c6f9... with a real secret string. It could be created by running in a node console: `require('crypto').randomBytes(64).toString('hex')`

In both cases, replace the params with your own.

To test the app, you must install the 'company' database (sql in db folder) and run node src/index.js
