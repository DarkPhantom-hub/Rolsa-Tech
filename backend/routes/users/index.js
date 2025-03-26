var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/";
var crypto = require('crypto-js');
var UserFunctions = require('./functions')
var AuthFunctions = require('../auth/functions');
const {GetMe} = require('./@me');

router.get('/@me',(req,res) => GetMe(req,res));

router.post('/', async function(req,res)
{
    
        var email = req.body.email;
        var password = crypto.SHA512(req.nody.password).toString();
        var client = new MongoClient(url);
        var database = client.db('Rolsa');
        var collection = database.collection("users");
        if(await UserFunctions.CheckEmailExists(email))
        {
            // if this email already exists
            res.status(500).json({message:"Email is already being used"});
        }else{
            var newUser = await collection.insertOne({
                email,password
            })
            if(newUser.acknowledged)
            {
                res.json({message:"User created"})
            }else{
                res.status(500).json({message:"An error occured when creating a new user"})
            }
        }
        
})

module.exports = router;