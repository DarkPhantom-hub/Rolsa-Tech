const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require("bcryptjs");
const router = express.Router();
const UserFunctions = require('./functions');

const url = 'mongodb://localhost:27017/';
const dbName = 'Rolsa';

// REGISTER ROUTE
router.post('/', async function (req, res) {
    try {
        var { email, password } = req.body;
        var client = new MongoClient(url);
        await client.connect();
        var database = client.db("Rolsa");
        var collection = database.collection('users');

        const emailExists = await UserFunctions.CheckEmailExists(email);
        if (emailExists) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        var newUser = await collection.insertOne({ email, password: hashedPassword });

        if (newUser.acknowledged) {
            res.json({ message: "New user created" });
        } else {
            res.status(500).json({ message: "Could not create new user" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not create user" });
    }
});

// LOGIN ROUTE
router.post('/auth', async function (req, res) {
    try {
        var { email, password } = req.body;
        var client = new MongoClient(url);
        await client.connect();
        var database = client.db("Rolsa");
        var collection = database.collection('users');

        var user = await collection.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Could not login" });
    }
});

module.exports = router;
