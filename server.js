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
const Board = require('./models/Board');
app.post('/boards', async (req, res) => {
  try {
    res.json(await Board.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});
// Listener //////////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`You're listening on port ${PORT}!`));
