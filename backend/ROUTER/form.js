const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
let FormSchema =require("../add"); 

router.route('/form').post((req,res) =>
{
    FormSchema.create(req.body,(error,data) =>
    {
   
        console.log(data)
        res.json(data)
    
    })
})
module.exports=router;
 