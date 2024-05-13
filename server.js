// To run this file, need to install node.js and then run on the command prompt:
// npm install express
// node server.js

//Express is for serving up pages, etc.
var express = require("express");
//Need body-parser for processing POST requests
var bodyParser = require("body-parser");

var app = express(); //gets an instance of express.

app.use(bodyParser.urlencoded({extended: true})); //for POST requests.
app.use(bodyParser.json()); 

app.use(express.static("pub")); //serve up static files publicly (.html, .jpg, .css, etc.)
let loveMessages = [
    "You mean the world to me.",
    "Every moment with you feels like a dream.",
    "I am grateful for every day I get to spend with you.",
    "I feel so lucky to have you in my life.",
    "Your love fills my heart with joy.",
    "You are my sunshine on a cloudy day.",
    "I cherish every memory we create together.",
    "I love you more than words can express.",
    "Being with you is the best part of my day.",
    "You make me a better person.",
    "I fall for you more and more each day.",
    "Your love is my greatest treasure.",
    "You are my happily ever after.",
    "I am so grateful to have you as my partner.",
    "With you, I feel complete.",
    "You are the love of my life.",
    "I can't imagine my future without you.",
    "You are my forever and always.",
    "My love for you grows stronger with each passing day.",
    "You are the best thing that ever happened to me."
]
let messagesRecieve = []; 
let id = 0; 
//This is to respond to POST requests at the URL "/examplePost"
app.post("/messageSend", function(req, res) {
    const message = req.body.message; 
    messagesRecieve.push({id: id++, mess: message, date: new Date()}); 
    res.redirect("/"); 
});
app.get("/loveNote", function(req, res){
    //randomly generate a number
    const min = Math.ceil(0);
    const max = Math.floor(19); 
    let num = Math.floor(Math.random() * (max- min + 1) + min); 
    return res.json(loveMessages[num]); 
    
}); 
app.get("/messages", function(req, res){
    return res.json(messagesRecieve); 
}); 

app.listen(10504, function() {
    console.log("Server is now running.");
});
