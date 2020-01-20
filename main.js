var express = require("express");
var app = express();

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

app.use("/", require("./routes/index.js"));

app.listen(3000);