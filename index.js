var express = require("express");
var app = express();

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

app.get('/', function(req, res){
    const message = "Hello World!";
    res.render("landing", {message: message});
});

app.listen(3000, () => console.log('app listening on port 3000!'))

// const port = 3000,

// express = require("express")
// app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Universe!");
// })

// .listen(port, () => {
//   console.log(`The Express.js server has started and is listening on port number;'+ ${port};`);
// });