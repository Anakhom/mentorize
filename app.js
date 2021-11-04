const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const dbConnect = require('./db/connect');

const indexRouter = require('./routes/index');
const renderMentors = require('./routes/index');

const app = express();
const PORT = 3000;

dbConnect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mentors', renderMentors);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
