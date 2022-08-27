const express = require('express'),
router = express.Router(),
hello = require('../controllers/hello')

router.get('/', hello.hello);
router.get('/hello', hello.secondHello);
router.get('/sendToFrontend', hello.sendToFrontend);

module.exports = router;