const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',{ useNewUrlParser: true });


/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
