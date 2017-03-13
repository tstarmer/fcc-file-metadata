/*Requires*/
const mongodb = require('mongodb').MongoClient;
const express = require('express');

/*Constants*/
const app = express();



app.listen(process.env.PORT || 8080, function(){
  console.log('App listening on port ', process.env.PORT);
  
})