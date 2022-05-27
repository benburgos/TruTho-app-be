const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boards');

router.get('/boards', boardController.index);
router.delete('/boards/:id', boardController.delete);
router.put('/boards/:id', boardController.update);
router.post('/boards', boardController.create);
router.get('/boards/:id', boardController.show);

module.exports = router;
