const express = require('express');
const router = express.Router();
const User = require('../model/index')

// db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login', function(req, res, next) {
  User.findOne({username: req.body.username}, function(err, data) {
    if (data) {
      console.log(data);
      res.send("found");
    } else {
      res.send("failed");
    }    
  })
});

module.exports = router;
