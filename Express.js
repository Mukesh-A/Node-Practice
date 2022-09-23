const express = require("express");
const app = express();
app.get("", (req, res) => {
  res.send(`hello <a href="/home">Goo</a>`);
});
app.get("/home", (req, res) => {
  console.log("data", req.query.name);
  res.send("<h1>hello home<h1>");
});

app.get('/profile',(_,res)=>{
  const user={
    name:'muksh',
    country:'india'
  }
})

app.listen(3000);
