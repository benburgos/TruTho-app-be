const Board = require('../models/Board');

module.exports = {
  create,
  show,
  index,
  update,
  delete: deleteBoard,
};

// Main/Index Route Function /////////////////////////////////////////////
async function index(req, res) {
  try {
    res.json(await Board.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Delete Route Function /////////////////////////////////////////////////
async function deleteBoard(req, res) {
  try {
    res.json(await Board.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Update Route Function /////////////////////////////////////////////////
async function update(req, res) {
  try {
    res.json(
      await Board.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

// Create Route Function /////////////////////////////////////////////////
async function create(req, res) {
  try {
    res.json(await Board.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
}

// Show Route Function ///////////////////////////////////////////////////
async function show(req, res) {
  try {
    res.json(await Board.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
}
