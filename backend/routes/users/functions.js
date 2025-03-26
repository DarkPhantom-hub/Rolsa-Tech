const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017/";

async function CheckEmailExists(email)
{
    var client = new MongoClient(url);
    var database = client.db('Rolsa');
    var collection = database.collection('users');
    var count = await collection.countDocuments({
        email:email
    });

}

module.exports = {CheckEmailExists}