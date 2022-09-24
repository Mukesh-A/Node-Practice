const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  console.log("redFilter");
  if (!req.query.age) {
    res.send("please provide age");
  } else if (!req.query.age < 18) {
    res.send("you cant not access this please provide age");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("welcome to home page");
});
app.get("/users", (req, res) => {
  res.send("welcome to home page");
});
