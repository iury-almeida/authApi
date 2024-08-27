'use strict';

const animalRoutes = require('../src/api/auth/authRoutes');

module.exports = (app) => {
    animalRoutes(app);
}