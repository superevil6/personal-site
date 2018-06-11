const mongoose = require('mongoose');

//connect to mongodb

mongoose.connect('mongodb://127.0.0.1:27017/test');

mongoose.connection.once('open', function(){
    console.log("connection has been made.");
}).on('error', function(error){
    console.log('connectoin error: ', error );
});
