'use strict';

const app = require('./config/server');
const testConnection = require(`./config/sequelize`);
const database = require("./config/sequelize");

const user = require("./config/dbSequelize");

(async () => {
    
    await database.sync();
})()



app.listen(process.env.APIPORT || process.env.PORT, () => {
    console.log('App is listening on port ', process.env.APIPORT || process.env.PORT);
});