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
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://alexcassells.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.listen(port, ()=>{
console.log('listening')
});

app.get('/api/blogPosts', db.getBlogPosts);
app.get('/api/skills', db.getSkills);