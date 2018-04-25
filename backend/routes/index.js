const express = require("express");
const router = express.Router();
const users = require("../users/index");
const auth = require("../auth/authFunctions");

router.post("/register",(req,res) => {
  auth.signup(req,res);
});

module.exports = router;
