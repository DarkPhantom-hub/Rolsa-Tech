const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { MongoClient } = require('mongodb');

const router = express.Router();
const url = 'mongodb://localhost:27017/';
const dbName = 'Rolsa';

// Function to generate JWT token
function generateAccessToken(email) {
    return jwt.sign({ email }, "74af9c230b163bdf28d8b14f2b65ead1ae7b2feb7037a180d9be8c2cf582653f1ce39c74ac54a06558de8e4b835a430fa38c51229dab54737b9a2729b4f7fb9f", { expiresIn: "1h" });
}

// LOGIN ROUTE
router.post('/', async function(req, res) {
    let client = new MongoClient(url);

    try {
        await client.connect();
        var database = client.db('Rolsa');
        var collection = database.collection('users');

        var { email, password } = req.body;

        console.log("Checking user:", email);
        var user = await collection.findOne({ email });

        if (!user) {
            console.log("User not found.");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        console.log("Stored password hash:", user.password);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("Password does not match.");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        var token = generateAccessToken(email);
        res.json({ token });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "An error occurred while logging in" });

    } finally {
        await client.close();
    }
});

module.exports = router;