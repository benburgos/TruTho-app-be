// Dependencies //////////////////////////////////////////////////////////
require('dotenv').config();
const { PORT = 3000, DATABASE_URL } = process.env;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// App Object ////////////////////////////////////////////////////////////
const app = express();

// Database Connection ///////////////////////////////////////////////////
// Establish the connection
mongoose.connect(DATABASE_URL);
// Connection Events
mongoose.connection
  .on('open', () => console.log(`You are connected to MongoDB!`))
  .on('close', () => console.log(`You are disconnected from MongoDB!`))
  .on('error', (error) => console.log(error));

// Middleware ////////////////////////////////////////////////////////////
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Routes ////////////////////////////////////////////////////////////////

// Listener //////////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`You're listening on port ${PORT}!`));
