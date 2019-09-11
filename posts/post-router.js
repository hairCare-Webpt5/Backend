const router = require('express').Router();
const Post = require('./post-model');
const restricted = require('../auth/auth-middleware');


router.get('/', restricted, (req,res) => {
    console.log(req);
    Post.find()
        .then(posts => {
            res.status(201).json({posts:posts});
        })
        .catch(err => res.send(err));
});
   

router.post('/newPost', restricted, (req,res) => {
    const post = req.body;

    Post.add(post)
        .then(postNew => {
            res.status(201).json(postNew);
        })
        .catch(err => {
            res.status(500).json({message: 'unable to post'})
        });
});

module.exports = router;