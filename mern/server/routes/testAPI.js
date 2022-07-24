var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('API is working properly');
});

router.get('/record', function(req, res) {
    res.send('record working');
});

module.exports = router;
