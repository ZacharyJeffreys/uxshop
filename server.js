//Express Server **************
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer();


server.on('request', (app));

server.listen(3000, ()=>{
  console.log('Server running on port: 3000');
});

//MIDDLEWARE CODE **************
//BodyParser(JSON)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//MONGO CODE *******************
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://new-user:new-user@travelbook-h3eb5.mongodb.net/test?retryWrites=true';

//EXPRESS HTTP ROUTES *****************
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html');
})
app.get('/css/main.css', (req, res)=>{
  res.sendFile((__dirname + '/public/css/main.css'));
})
app.get('/js/main.js', (req,res)=>{
  res.sendFile((__dirname+ '/public/js/main.js'));
})
