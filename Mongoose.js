const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const main = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({ name: "m8" });
  let result = await data.save();

  console.log(result);
};

const UpdateInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "iphone" },
    { $set: { price: 10 } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({ name: "iphone" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  const data = await Product.find({ name: "Kumar" });
  console.log(data);
};

findInDB();
