const express = require('express');
const bodyParser = require('body-parser');
const db = require('./Queries');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.listen(port, ()=>{
console.log('listening')
});

app.get('/api/blogPosts', db.getBlogPosts);
