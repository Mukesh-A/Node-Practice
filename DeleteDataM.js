const dbConnect = require("./Mongodb");

const deleteData = async ()=>{
    let data = await dbConnect();
    let deletes = await data.deleteOne({name:"ravi"})
    console.log(deletes)
} 
deleteData();