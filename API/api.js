const express = require("express");
const dbConnect = require("../mongodb");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});

app.post("/", async (res, req) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  console.log(result);
});

app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    {
      name: req.body.name,
    },
    { $set: req.body }
  );
  console.log(result);
  resp.send({ result: "update" });
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);
