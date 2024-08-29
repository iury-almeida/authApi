'use strict';

const authRoutes = require('../src/api/auth/authRoutes');

module.exports = (app) => {
    authRoutes(app);
}