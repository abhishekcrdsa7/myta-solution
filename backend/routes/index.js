const express = require("express");
const router = express.Router();
const users = require("../users/index");
const auth = require("../auth/authFunctions");
const passportService = require('../services/passport');
const passport = require('passport');
const fs = require("fs");
const requireSignin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt',{session: false});

router.post("/register",(req,res) => {
  auth.signup(req,res);
});

router.post("/login",requireSignin,(req,res) => {
  auth.signin(req,res);
});

router.get("/contents",requireAuth,(req,res) => {
  let data = fs.readFileSync("data.json");
  res.send(JSON.parse(data));
});
module.exports = router;
