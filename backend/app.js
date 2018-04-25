const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

app.use(bodyParser.json({type: "*/*"}));

app.use("/",routes);

app.listen(3001);
