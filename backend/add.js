const mongoose = require("mongoose");
const {Schema}=require("mongoose");
const FormSchema = new Schema({
  
 img: String,
 name: String,
 brand: String,
 cat: String,
 year:String,
 details:String,  
 orgin:String,
 source:String
 
},{versionKey:false});

module.exports=mongoose.model("dbadds",FormSchema);