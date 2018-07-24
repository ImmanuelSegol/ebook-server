const express = require('express');
//const mongoose = require('mongoose');
const Ebooks = require('../model/ebook.js');

const ebooksRouter = express.Router();

ebooksRouter.use(express.json());

ebooksRouter.route('/')
.get((req,res,next) => {
    Ebooks.find({})
    .then(books => {
        res.statusCode =200;
        res.setHeader('Content-Type', 'application/json');
        res.json(books);
    },err => next(err))
    .catch(err => next(err))
})
.put((req,res) => {
    res.statusCode = 200;
    res.end("PUT NOT ALLOWED");
})
.post((req,res,next) => {
    Ebooks.create(req.body)
    .then(book => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(book);
    },err => next(err))
    .catch(err => next(err))
})
.delete((req,res,next) => {
    Ebooks.deleteMany({})
    .then(all => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(all)
    },err => next(err))
    .catch(err => next(err))
});


module.exports = ebooksRouter;
