import React from "react";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
//console.log(props, " props");
//console.log(location, " useLocation Hook");
//console.log("data is",data);
export default function Details(props) 
{
  const location = useLocation();
   
  const data = location.state?.data;
    
  
  return (
    <>
    <br></br><br></br><br></br><br></br>
    <center>
    <Card style={{ width: '18rem', backgroundColor:"rgb(142, 248, 100"}}>
    <ListGroup variant="flush">
        <Card.Title>CATEGORY :</Card.Title>
        <ListGroup.Item> <i> {data ? data.cat : "Go to Home"} </i></ListGroup.Item>
        <Card.Title>HIGHLIGHTS :</Card.Title>
        <ListGroup.Item><i > {data ? data.details : "Go to Home"}</i> </ListGroup.Item>

        <ListGroup.Item> <Card.Link target="_blank" href= {data ? data.source : "Go to Home"} ><Button variant="primary">SOURCE</Button></Card.Link></ListGroup.Item>
        <Card.Title>ORGIN:</Card.Title>
        <ListGroup.Item>{data ? data.orgin : "Go to Home"} </ListGroup.Item>    
    </ListGroup>
    </Card>
    </center>
    </>
  );

}
