async function login(req, res) {
    try {
        if (req.headers.user == 'test' && req.headers.password == '123') {
            res.status(200);
            res.send('autheticated');
        }
        else {
            res.status(401);
            res.send('not allowed');
        }
    } catch (error) {
        console.log('Error while requesting: ', error);
    }
}

async function token(req, res) {
    try {
        
    } catch (error) {
        console.log('Error while requesting: ', error);
    }
}

export default {login, token}