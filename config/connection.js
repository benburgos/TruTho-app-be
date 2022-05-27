const mongoose = require('mongoose')

// Database Connection ///////////////////////////////////////////////////
// Establish the connection
mongoose.connect(process.env.DATABASE_URL);
// Connection Events
mongoose.connection
  .on('open', () => console.log(`You are connected to MongoDB!`))
  .on('close', () => console.log(`You are disconnected from MongoDB!`))
  .on('error', (error) => console.log(error));