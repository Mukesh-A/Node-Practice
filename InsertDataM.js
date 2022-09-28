const dbConnect = require('./Mongodb');


const insert = async ()=>{
    const db =await dbConnect();
    const result =await db.insert(
        [
            {
                name:"mukesj",
                age:456
            },
            {
                name:"Raj",
                age:356
            },
            {
                name:"Kumar",
                age:256
            },
            {
                name:"ravi",
                age:156
            }
        ]
        
    );

    console.log(result)
}
insert();