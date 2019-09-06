const router = require('express').Router();
const Post = require('./post-model');
const restricted = require('../auth/auth-middleware');

router.get('/', restricted, (req,res) => {
    Post.get()
        .then(posts => {
            res.status(201).json({posts:posts});
        })
        .catch(err => res.send(err));
});

router.get('/:id', restricted,(req,res) => {
    const [id] = req.params.id;

    Post.getById(stylistId)
        .then(post => {
            if(post === undefined){
                res.status(400).json(res)
            }
            else{
                 res.status(200).json(post)
            }
        })
        .catch(err => {
             res.status(500).json({message:  'Unable to locate post by that stylest'})
        })
})

router.post('/', restricted, (req,res) => {
    Post.add(req.body)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
             res.status(500).json({message: 'unable to create post'})
        })
})

module.exports = router;