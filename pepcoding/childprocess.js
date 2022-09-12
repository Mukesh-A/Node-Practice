//CHILD PROCESS MODULE


//Using node we r tring to open cal,vs code

let cp = require("child_process")
console.log("trying to open cal")
cp.execSync("code");
console.log("opened calc") 

//running a code output
let c = cp.execSync("node example.js")
console.log(c)
