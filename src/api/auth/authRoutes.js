
import authController  from './authController.js';

export default (app) => {
    // app.post('/animal', Controller.create);
    // app.put('/:_id', Controller.update);
    app.get('/login', authController.login);
    // app.get('/:_id', Controller.selectById);
    // app.delete('/:_id', Controller.remove);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
};
