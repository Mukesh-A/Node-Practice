const {MongoClient} =  require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url)

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db('e-comm')
    return db.collection('products');
    // let response = await collection.find({name: 'mukesh'}).toArray();
    // console.log(response);
}
// getData().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data)
//     })
// })

module.exports = dbConnect;