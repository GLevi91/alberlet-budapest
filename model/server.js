var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

function insertData (inputData){
    const url = "mongodb+srv://GLevi91:Mancity917@budapestalberletcluster-p3bbk.mongodb.net/alberlet";
    MongoClient.connect(url)
    .then(function(client){
        const collection = client.db("alberlet").collection("lakasok");
        collection.insertOne(inputData)
        .then(function(result){
            assert.equal(1, result.result.n);
            console.log("Inserted 1 document into the collection");
        });
        return client;
    })
    .then(function(client){
        client.close();
    })
}

module.exports = insertData();