var express = require('express');
var router = express.Router();
var CryptoJS = require('crypto-js');
const {MongoClient} = require('mongodb');
const {generateAccessToken} = require('./functions');
var url = "mongodb://localhost:27017/";


router.post('/',async function(req,res)
{
    try{

        var email = req.body.email;
        var password = CryptoJS.SHA512(req.body.password).toString();

        var client = new MongoClient(url);
        var database = client.db('Rolsa');
        var collection = database.collection('users');
        
        //this checks the users login credentials agains the users in the database
        var user = await collection.countDocuments({
            email,password
        })

        if(user == 1)
        {
            //correct login credentials
            
            var token = generateAccessToken(email);
            res.json({token})

        }else{
            //incorrect login credentials
            res.json({message:"The Username or Password is Incorrect"})
        }

    }catch(error)
    {
        console.log(error)
        res.status(500).json({message:"An error occured when logging in"})
    }
})

module.exports = router;