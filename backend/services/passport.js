const passport = require("passport");
const users = require("../users/index");
const _ = require("lodash");
const config = require("../auth/config");
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const localOptions = {usernameField: "username"};

const localLogin = new LocalStrategy(localOptions,function(username, password, done){
    const user = _.filter(users, {username})[0];
    if(!user) {
      return done(null, false);
    }
    done(null,user);
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done){
  const user = _.filter(users,{username: payload.sub});
  if(user){
    return done(null,user);
  }
  return done(null,false);
});

passport.use(jwtLogin);
passport.use(localLogin);
