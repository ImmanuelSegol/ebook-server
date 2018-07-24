const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Users = require('../model/user.js');

const usersRouter = express.Router();

usersRouter.use(express.json());

usersRouter.route('/')
.get((req,res,next) => {
    Users.find({})
    .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users); 
    },err => next(err))
    .catch(err => next(err));
})
.put((req,res) => {
    res.statusCode = 200;
    res.end('PUT is not supported!');
})
.post((req,res,next) => {
    Users.create(req.body)
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(user);
    },err => next(err))
    .catch(err => next(err))
})
.delete((req,res,next) => {
    Users.deleteMany({})
    .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(users)
    },err => next(err)).catch(err => next(err))
    //res.statusCode = 200;
    //res.end('DELETE is not supported');
});


module.exports = usersRouter;
