const express = require('express');
const mongoose = require('mongoose');
const Users = require('../model/user.js');

const ebooksRouter = express.Router();

ebooksRouter.use(express.json());

ebooksRouter.route('/')
.get()
.put()
.post()
.delete();


module.exports = ebooksRouter;
