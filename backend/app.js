const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const cors = require("cors");

app.use(bodyParser.json({type: "*/*"}));
app.use(cors());
app.use("/",routes);

app.listen(3001);
