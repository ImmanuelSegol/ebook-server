const express = require('express');
const mongoose = require('mongoose');
const userRouter = express.Router();

const Users = require('../model/user');

userRouter.use(express.json());

userRouter.route('/')
.get((req,res,next) => {
    Users.find({})
    .then(users => {
      res.statusCode = 200;
      res.setHeader('Content-Type','application/json');
      res.json(users)
    },err => next(err))
    .catch(err => next(err));
})
.put((req,res) => {
    res.statusCode = 200;
    res.end('PUT is not supported!');
})
.post((req,res,next) => {
    User.create(req.body)
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(user);
    },err => next(err))
    .catch(err => next(err))
})
.delete((req,res) => {
    res.statusCode = 200;
    res.end('DELETE is not supported');
})


module.exports = userRouter;
