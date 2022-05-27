const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boards');

router.get('/', boardController.index);
router.delete('/:id', boardController.delete);
router.put('/:id', boardController.update);
router.post('/', boardController.create);
router.get('/:id', boardController.show);

module.exports = router;
