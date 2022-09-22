const fs =require('fs');
const path = require('path')
const dirpath = path.join(__dirname,'crud')
const filePath = `${dirpath}/test.txt`

console.log(__dirname)
//WRITE FILE
// fs.writeFileSync(filePath,'Hey')

// READ FILE
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

//Append
// fs.appendFile(filePath,'and new update',(err)=>{
//     if(!err) console.log("update")
// })

//RENAME
// fs.rename(filePath,`${dirpath}/fruit.txt`,(err)=>{
//         if(!err) console.log("renamed")
//     })
// fs.unlinkSync(`${dirpath}/fruit.txt`)

///Timeout 

console.log("1")

setTimeout(()=>{

    console.log("2")
},500)
console.log("3")
console.log("4")