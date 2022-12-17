const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: Number,
  img: String,
  name: String,
  brand: String,
  cat: String,
  year: String,
  details:String,
  orgin:String,
  source:String
});

const Products = mongoose.model("products", ProductSchema);
 module.exports=Products;