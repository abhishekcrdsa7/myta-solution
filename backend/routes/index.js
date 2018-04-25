const express = require("express");
const router = express.Router();
const users = require("../users/index");
const auth = require("../auth/authFunctions");
const passportService = require('../services/passport');
const passport = require('passport');
const requireSignin = passport.authenticate('local', { session: false });

router.post("/register",(req,res) => {
  auth.signup(req,res);
});

router.post("/login",requireSignin,(req,res) => {
  auth.signin(req,res);
});

module.exports = router;
