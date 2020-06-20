var express = require('express');
var router = express.Router();

const eventController = require('./services/event');


router.post('/event', eventController.addEvent );
router.get('/search/event', eventController.searchEvent );

module.exports = router;
