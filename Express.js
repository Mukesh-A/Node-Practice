const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send("hello");
});
app.get("/home", (req, res) => {
  res.send("hello home");
});
app.listen(3000);
