const _ = require("lodash");
const users = require("../users/index");
const config = require("./config");
const bcrypt = require("bcrypt");
const jwt = require("jwt-simple");

const saltRounds = 10;

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.username, iat: timestamp }, config.secret);
}

exports.signup = function(req,res) {
    const password = req.body.password;
    const username = req.body.username;
    const exist = _.filter(users,(o) => o.username === username)
    if(exist[0]){
      return res.json({error: "The user with this username is already present"});
    }
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if(err){
        return res.send({error: "An error occured."});
      }
      const newUser = {
        username: username,
        password: hash
      };
      users.push(newUser);
      res.send({token: tokenForUser(newUser)});
    });
  }

  exports.signin = function(req, res){
    if(!req.user) {
      return res.send({error: "Username/Password field does not match our record."});
    }
    const password = req.body.password;
    const username = req.body.username;
    bcrypt.compare(password,req.user.password,function(err, isMatch){
      if(err){
        return res.send({error: "Sorry, an error occured while logging you in. Please try again."})
      }
      if(!isMatch){
        return res.send({error: "Username/Password field does not match our record."});
      }
        return res.send({token: tokenForUser(req.user)});
    });
  }
