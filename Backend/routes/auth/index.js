const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { MongoClient } = require('mongodb');

const router = express.Router();
const url = 'mongodb://localhost:27017/';
const dbName = 'Rolsa';

// Function to generate JWT token
function generateAccessToken(email) {
    return jwt.sign({ email }, "bce874d2b9ada9c8c30825eec00c67b446f784ff4f78767a483ed993f8d7f9af2ed8028797ae595ed9f18ea00d77ea9a3ac61c2fa98d504637f7ab7b1e9e4ba8", { expiresIn: "1h" });
}

// LOGIN ROUTE
router.post('/', async function(req, res) {
    let client = new MongoClient(url);

    try {
        await client.connect();
        var database = client.db(Rolsa);
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
