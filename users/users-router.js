const express = require('express');
const Users = require('./user-model');
const restricted = require('../auth/auth-middleware');

const router = express.Router();

router.get('/stylist', restricted, (req,res) => {
    // stylist 1
    // user  2
    Users.find(1)
            .then(stylist => {
                res.status(201).json({stylist:stylist});
            })
            .catch(err => res.send(err));
});

router.get('/users', restricted, (req,res) => {
    Users.find(2)
         .then(users => {
             res.status(201).json({users:users});
         })
         .catch(err => res.send(err));
});

module.exports = router;