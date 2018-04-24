const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
const bcrypt = require('bcrypt');
const saltRounds = 10;


var users = [];
app.post("/register",(req,res) => {
  const password = req.body.password;
  const username = req.body.username;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if(err){
      return console.log("error");
    }
    users.push({
      username: username,
      password: hash
    });
    res.redirect("http://localhost:3000/");
  });
});

app.listen(3001);
