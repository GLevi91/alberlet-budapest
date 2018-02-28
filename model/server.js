var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://GLevi91:Mancity917@budapestalberletcluster-p3bbk.mongodb.net/alberlet";
MongoClient.connect(uri, function(err, client) {
    const collection = client.db("alberlet").collection("lakasok");
    // perform actions on the collection object
    client.close();
});