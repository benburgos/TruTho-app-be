const Board = require('./models/Board');
//  use this https://github.com/benburgos/Async-Await-Dogs/blob/main/controllers/dogs.js

// Main/Index Route //////////////////////////////////////////////////////
app.get('/boards', async (req, res) => {
  try {
    res.json(await Board.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete Route //////////////////////////////////////////////////////////
app.delete('/boards/:id', async (req, res) => {
  try {
    res.json(await Board.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// Update Route //////////////////////////////////////////////////////////
app.put('/boards/:id', async (req, res) => {
  try {
    res.json(
      await Board.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create Route //////////////////////////////////////////////////////////
app.post('/boards', async (req, res) => {
  try {
    res.json(await Board.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Show Route ////////////////////////////////////////////////////////////
app.get('/boards/:id', async (req, res) => {
  try {
    res.json(await Board.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
