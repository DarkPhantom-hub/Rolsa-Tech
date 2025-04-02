var express = require('express');
var router = express.Router();
var cryptojs = require('crypto-js');
const {MongoClient} = require('mongodb');
const {generateAccessToken} = require('./functions');
var url = 'mongodb://localhost:27017/';

router.post('/', async function(req, res) {
    try {
        var email = req.body.email;
        var password = cryptojs.SHA512(req.body.password).toString();
        var client = new MongoClient(url);
        await client.connect();
        var database = client.db('rolsa');
        var collection = database.collection('users');

        var user = await collection.findOne({ email, password });

        if (user) {
            var token = generateAccessToken(email);
            res.json({ token });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
        await client.close();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while logging in" });
    }
});


module.exports = router;