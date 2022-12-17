const express = require("express");
const cors = require("cors");    //connect server host & frontend host
const mongoose =require("mongoose");
const bodyParser=require("body-parser");

const Formdata=require("./ROUTER/form");
const Products=require("./Product");


const app = express();
const port = 3001; 

// Middleware
app.use(express.json());
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const connection_url="mongodb+srv://girishankar:v.p.shankar@cluster0.v8mpdiy.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(connection_url,{
  useNewUrlParser: true,
  useUnifiedTopology: true

},(err)=>
{
  if(err)
  {console.log("error in connection")}
  else
  {console.log("connected to db")}
});


app.use('/adding',Formdata); // go to router



 
app.get("/", async(req, res) =>
{
  const data = await Products.find({}).sort({id:1})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  console.log("ready");
});

app.get("/agri", async(req, res) =>
{
  const data = await Products.find({cat:"AGRICULTURE"})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  
});

app.get("/software", async(req, res) =>
{
  const data = await Products.find({cat:"SOFTWARE"})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  
});

app.get("/auto", async(req, res) =>
{
  const data = await Products.find({cat:"AUTOMOBILE"})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  
});

app.get("/electrical", async(req, res) =>
{
  const data = await Products.find({cat:"ELECTRICAL"})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  
});

app.get("/recycling", async(req, res) =>
{
  const data = await Products.find({cat:"RECYCLING"})
  console.log("id is",data[0].id);
  res.status(200).json(data);
  
});

 

app.listen(port, () => console.log("listening on  the port", port));
