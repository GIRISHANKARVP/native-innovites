import React, { useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {Link}  from 'react-router-dom';

//import List from '../List';

import {FaStar,FaShareSquare,FaEye,FaClock } from 'react-icons/fa';
import axios from "axios";

//import Data from "../data.json";
// import axios from "../../axios"
import "bootstrap/dist/css/bootstrap.css";

import logo1 from '.././IMAGE/logo1.png';
import logo2 from '.././IMAGE/logo2.png';
import logo3 from '.././IMAGE/logo3.png';
import logo4 from '.././IMAGE/logo4.png';
import logo5 from '.././IMAGE/logo5.png';



function Data()
{    
    const [datas,setData]=useState([]);
    const [dis,setDis]=useState(false); //optional

    const [view,setVIEW]=useState(0); 
    var count=0;  
    // function VIEWS()
    // {
    //     setVIEW(view+1);
    //     console.log(view);

    
    // }


    const fetchdataAgri=async ()=>
    {
      
        const products=await axios.get("http://localhost:3001/agri");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }

    const fetchdataSoftware=async ()=>
    {
        const products=await axios.get("http://localhost:3001/software");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }
   
    const fetchdataAutomobile=async ()=>
    {
      
        const products=await axios.get("http://localhost:3001/auto");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }

    const fetchdataElectrical=async ()=>
    {
      
        const products=await axios.get("http://localhost:3001/electrical");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }

    const fetchdataRecycling=async ()=>
    {
      
        const products=await axios.get("http://localhost:3001/recycling");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }

 


    const fetchdata=async ()=>
    {
        const products=await axios.get("http://localhost:3001");
        //console.log("data is",products);  //all will come ,not possible to find an item
        setData(products.data);  
        setDis(true)
    }
    useEffect(()=>
    {
        fetchdata()
    },[]);
   

    return(
        <div>
           
        {/* style={{ display:"flux",justifyContent:'space-around'}} */}
        <div class="row" >
        <div class="col-sm-1"></div>
        <div class="col-sm-2" >
            <div style={{ display: "inline", padding:10}}>   
            <Button onClick={fetchdataAgri} variant="outline-dark"> <Image src={logo1} fluid roundedCircle/><p style={{color:"white"}}>AGRICULTURE</p> </Button>
            </div>
        </div>
          
        <div class="col-sm-2" >
            <div style={{ display: "inline", padding:10}}>
            <Button onClick={fetchdataSoftware} variant="outline-dark"><Image src={logo2} fluid roundedCircle/><p style={{color:"white"}}>SOFTWARE</p></Button>
            </div>
        </div>
       
        <div class="col-sm-2" >
            <div style={{ display: "inline", padding:10}}>
            <Button onClick={fetchdataAutomobile} variant="outline-dark"><Image src={logo3} fluid roundedCircle/><p style={{color:"white"}}>AUTOMOBILE</p></Button>
            </div>
        </div>
        
        <div class="col-sm-2" >
            <div style={{width:"50px", display: "inline", padding:10}}>
            <Button onClick={fetchdataElectrical} variant="outline-dark"><Image src={logo4} fluid roundedCircle/><p style={{color:"white"}}>ELECTRICAL</p></Button>
            </div>
        </div>

        <div class="col-sm-2" >
            <div style={{width:"100px", display: "inline", padding:10}}>
            <Button onClick={fetchdataRecycling} variant="outline-dark"><Image src={logo5} fluid roundedCircle/><p style={{color:"white"}}>RECYCLING</p></Button>
            </div>
        </div>
        <div class="col-sm-1"></div>
        </div>
        





        <div class="row">
            <div class="col-sm-4"></div>

            <div class="col-sm-4">

            {dis && 
            <div>
            {datas.map(data=> (
            <>
            <br></br><br></br>
            <div style={{display:"flex",justifyContent:'space-around'}}>
            <div>
             
            <Link to="/details"  state={{ data: data }} >    
            <Button title="CLICK TO VIEW DETAIL" variant="link"  onClick={() => setVIEW(count+ 1)}  >
                
                <Image   fluid rounded src={data.img}style={{width:"300px",height:"100%"}} />
                
            </Button>
            </Link>
          
         
            <div style={{display:"block",color:"black",backgroundColor:"white",border:"2px solid black",borderRadius:"7px", width:"300px"}}>
                <br></br>
                <h5>NAME :<h5 style={{color:"green",display:"inline"}}>{data.name}</h5></h5>
                <p>BRAND : {data.brand}</p>
            </div>
            </div>

            <div>
                <h1 title="SAVE" style={{color:"white",fontSize:" 3rem"}}>  <FaStar/> </h1>
                <h1 title="SHARE" style={{color:"white",fontSize:" 3rem"}}>  <FaShareSquare/> </h1>
                <h1 title="VIEWS" style={{color:"white",fontSize:" 3rem"}}>  <FaEye/> <h6>{view}</h6></h1>
                <h1 title="YEAR" style={{color:"white",fontSize:" 3rem"}}>  <FaClock/> <h6>{data.year}</h6> </h1>
            </div>
            </div>
            <br></br>
            </>          
            ))}
            </div>
            }
            </div>

        <div class="col-sm-4"></div>
        </div>
        <br></br>
        </div>
        
    )
}

  
export default function All()
{
    return(
        <>
        
        <center style={{height:100}}>
        <br></br>
        <br></br>
        <br></br>
       
        <div> {Data()}</div>    
                
           
        </center>
        </>
    );
};
