const dbConnect = require("./Mongodb");

 const updateData = async () => {
  let data = await dbConnect();
  let result =await data.updateOne({
    name:'mukesj'
  }, {$set:{name: "MUKESHAA"}})
  console.warn(result);
};
updateData();
