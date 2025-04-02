var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function(req, res) {
    res.json({ message: "Users route is working" });
});

module.exports = router;
