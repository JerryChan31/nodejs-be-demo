const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const mongoose = require('mongoose');
const config = require('./config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;

connect();

function connect() {
  const options = { useNewUrlParser: true};
  mongoose.connect(config.db, options).then(
    () => { console.log("db connected")},
    err => { console.log(err)} //retry?
  );
}