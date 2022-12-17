const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  
 img: String,
 productname: String,
 brandname: String,
 category: String,
 about:String,  
 contact:String,
 place:String
 
},{collection:"dbadd"});

module.exports=mongoose.model("dbadd",FormSchema);