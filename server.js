// Dependencies //////////////////////////////////////////////////////////
require('dotenv').config();
require('./config/connection');
const { PORT = 3001 } = process.env;
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

// App Object ////////////////////////////////////////////////////////////
const app = express();

// Middleware ////////////////////////////////////////////////////////////
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Routes ////////////////////////////////////////////////////////////////
// Index Redirect /////
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
// Board Routers //////
const boardRouter = require('./routes/boards');
app.use('/boards', boardRouter);

// Listener //////////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`You're listening on port ${PORT}!`));
