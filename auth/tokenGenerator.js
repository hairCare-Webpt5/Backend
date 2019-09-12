const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');


module.exports = {
    generateToken
}

function generateToken(user) {
    
    const payload = {
        subject: 'user',
        username: user.username,
        role: user.roleId
       
    }

    const secret = secrets.jwtSecret;

    const options = {
        expiresIn: '1h'
    }

    return token = jwt.sign(payload, secret, options)
}