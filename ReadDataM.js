const dbConnect = require('./Mongodb');

const ReadData = async ()=>{
    let data = await dbConnect();
    data =await data.find({name: 'mukesh'}).toArray();
    console.log(data)
}
ReadData();