const express = require('express');
const router = express.Router();
const User = require('../model/index')

// db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/#/list');
});

/*
router.post('/api/login', function(req, res, next) {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, data) {
    if (data) {
      res.redirect('/#/list');
    } else {
      res.json({
        status: false,
        info: "用户名或密码不正确！"
      });
    }    
  })
});*/

module.exports = router;
