'use strict';

const authController = require('./authController');

module.exports = (app) => {
    // app.post('/animal', Controller.create);
    // app.put('/:_id', Controller.update);
    // app.get('', Controller.select);
    // app.get('/:_id', Controller.selectById);
    // app.delete('/:_id', Controller.remove);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
};