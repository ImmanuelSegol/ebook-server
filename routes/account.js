const express = require('express');
const passport = require('passport');
const User = require('../model/user');
const accountRouter = express.Router();


accountRouter.use(express.json());


accountRouter.route('/login')
.post((req,res,next) => {
    User
});