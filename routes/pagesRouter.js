const express = require('express');
const mongoosse = require('mongoose');
const Pages = require('../model/page.js');

const pagesRouter = express.Router();

pagesRouter.use(express.json());


pagesRouter.route('/')
.get((req,res,next) => {
    Pages.get({})
    .then(all => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(all);
    },err => next(err))
    .catch(err => next(err))
})
.post((req,res,next) => {
    Pages.create(req.body)
    .then(page => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(page);
    },err => next(err))
    .catch(err => next(err))
});

module.exports = pagesRouter;

