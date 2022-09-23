const express = require("express");
const path = require("path")
const app = express();
const publicpath = path.join(__dirname,'public')

app.set('view engine', 'ejs')
app.get('/profile',(_,res)=>{
    const user={
      name:'muksh',
      country:'india'
    }
    res.render('profile',{user})
  })
  
  app.listen(3000);
  