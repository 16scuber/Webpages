const { application } = require('express');
const express = require('express');
const controller = require('../controllers/pageController');

const router = express.Router();

//GET /stories/new: send html form for creating a new trade

router.get('/new', controller.new);

router.get('/', controller.trades);

router.post('/', controller.create);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.post('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;