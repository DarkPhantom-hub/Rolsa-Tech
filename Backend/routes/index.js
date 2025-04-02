var express = require('express');
var router = express.Router();

/* GET API home */
router.get('/', function(req, res) {
    res.json({ message: "Welcome to the API" });
});

module.exports = router;
