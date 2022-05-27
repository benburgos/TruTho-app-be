const express = require('express');
const router = express.Router();

// Index Route ///////////////////////////////////////////////////////////
router.get('/', (req, res) => {
  res.redirect('/boards')
});

module.exports = router;