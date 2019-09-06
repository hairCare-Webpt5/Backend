const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenGen = require('./tokenGenerator.js');

const Users = require('./auth-model.js');

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user) 
        .then ( save => {
            res.status(201).json(save);
        })
        .catch( error => {
            res.status(500).json({message: 'could not register', error: error});
        })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username }).first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = tokenGen.generateToken(user);

                res.status(200).json({message: `Welcome ${user.username}`, token});
            } else {
                res.status(401).json({message: 'Invalid Credentials'});
            };
        })
        .catch( error => {
            res.status(500).json(error);
        })
});

module.exports = router;