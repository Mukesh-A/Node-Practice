// console.log("Mukesh");
// var a=20;
// var b =10;
// var c = 30;
// import {a} from './b'
// const app = require('./b')
// console.log(app.a);

//FILES SYSYSTEM
// const fs = require('fs')
// fs.writeFileSync("hello.txt","Mukesh hello")

// console.log("log", __dirname)

//CREATING SERVER

const http = require("http");
const data = require('./data')
http
  .createServer((req, res) => {
    // res.write("<h2>hello</h2>");
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data) )
    res.end();
  })
  .listen(2345);
