import app from './config/server.js';
import sequelize from "./config/sequelize.js";

import user from "./config/dbSequelize.js";

(async () => {
    await sequelize.sync();
})()

app.listen(process.env.APIPORT || process.env.PORT, () => {
    console.log('App is listening on port ', process.env.APIPORT || process.env.PORT);
});