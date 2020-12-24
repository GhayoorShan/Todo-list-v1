const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
//const ejsLint = require('ejs-lint');

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list",{kindOfDay: day, newListItem: items });

      res.send();

});

app.get("/work", function(req, res) {
  res.render("about");
})

app.post("/",function(req, res) {

 var item = req.body.newitem;
 items.push(item);

 res.redirect("/");
})


app.listen(3000, function() {
  console.log("Server started at port 3000");
})
