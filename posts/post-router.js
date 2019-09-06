const router = require('express').Router();
const Post = require('./post-model');
const restricted = require('../auth/auth-middleware');

router.get('/posts', restricted, (req,res) => {
    Post.find()
        .then(posts => {
            res.status(201).json({posts:posts});
        })
        .catch(err => res.send(err));
});

router.post('/newPost', restricted, (req,res) => {
   
});