const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('derping on 3000')
  })

  app.get('/', (req, res) => {
    res.send('gurl')
  })

var db;

var MongoClient = require('mongodb').MongoClient;

var URL = 'mongodb://204.48.30.5:27017/';

MongoClient.connect(URL, function(err, db) {
    console.log(err);
  if (err) return

  var collection = db.collection('blog')
  collection.insert({name: 'taco', tasty: true}, function(err, result) {
    collection.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
})