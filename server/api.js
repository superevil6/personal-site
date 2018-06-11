const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const url = 'mongodb://204.48.30.5:27017/'
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect(url, (err, client) => {
  if (err){
    return console.log(err);
  }else{
    console.log('Connection established to', url);
  db = client.db('database-test') 
  app.listen(3001, () => {
    console.log('listening on 3001')
  })}
});

app.get('/blog', (req, res) => {
  db.collection('blog').find({"title" :'Testing the MONGODB'}).next(function(err, doc)
{
  if(err)
  console.log(err);
  res.json(doc);
})
});