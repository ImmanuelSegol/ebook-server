const express = require('express');
//const mongoose = require('mongoose');
const Ebooks = require('../model/ebook.js');

const ebooksRouter = express.Router();

ebooksRouter.use(express.json());

ebooksRouter.route('/')
.get((req,res,next) => {
    Ebooks.find({})
    .populate('creator')
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
        console.log(book.creator);
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

ebooksRouter.route('/:id')
.get((req,res,next) => {
    Ebooks.findById(req.params.id)
    .populate('creator')
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(user)
    },err => next(err))
    .catch(err => next(err))
})
.post((req,res) => {
    res.statusCode = 200;
    res.end('POST NOT ALLOWED');
})
.put((req,res,next) => {
    Ebooks.findByIdAndUpdate(req.params.id,req.body)
    .then(update => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(update)
    },err => next(err))
    .catch(err => next(err))
})
.delete((req,res,next) => {
    Ebooks.findByIdAndRemove
})

module.exports = ebooksRouter;
