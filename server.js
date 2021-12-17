const express = require("express");
const app = express();
const getData = require("./api.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var info = {
  about: "en-tr translate /api/:word",
};
info = JSON.stringify(info, null, 4);

app.get("/", function (req, res) {
  res.send(info);
});
app.get("/api", function (req, res) {
  res.send(info);
});

app.get("/api/:word", function (req, res) {
  var word = req.params.word;
  getData(word).then(function (r) {
    var apiResponse = JSON.stringify(r, null, 4);
    res.send(apiResponse);
  });
});

app.listen(3000, (_) => {
  console.log("server started on port 3000");
});
