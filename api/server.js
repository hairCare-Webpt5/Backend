const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const auth = require('../auth/auth-middleware');
const authRouter = require('../auth/auth-router');
const post = require('../posts/post-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req,res) =>{
    res.status(200).json({api: "im running"});
});

module.exports = server;

