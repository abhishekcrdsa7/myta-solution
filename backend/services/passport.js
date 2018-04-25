const passport = require("passport");
const users = require("../users/index");
const _ = require("lodash");
const config = require("../auth/config");
const LocalStrategy = require("passport-local");


const localOptions = {usernameField: "username"};

const localLogin = new LocalStrategy(localOptions,function(username, password, done){
    const user = _.filter(users, {username})[0];
    if(!user) {
      return done(null, {error: "Username/Password field does not match our record."});
    }
    done(null,user);
});

passport.use(localLogin);
