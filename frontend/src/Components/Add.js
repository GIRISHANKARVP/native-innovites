import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import axios from "axios";

export const Add= ()=>
{

    const initialValues = 
    {
        img:"",
        productname:"",
        brandname: "",
        category: "",
        about: "",
        contact: "",
        place: "",
    };
     
    
    const [values, setValues] = useState(initialValues);
      
    const handleChange = (e) =>
    {
        const  value  = e.target.value;
        //console.log(values);
        setValues({ 
        ...values,
        [e.target.name]: value
        });
    };
      



    const handleSubmit=(event)=> {

        const formdata =
        {
            img:values.img,
            productname:values.productname,
            brandname: values.brandname,
            category: values.category,
            about: values.about,
            contact: values.contact,
            place: values.place,
        }
        axios.post("http://localhost:3001/adding/form",formdata)
        .then(()=>{
            
            alert('Your details has been collected and go for decision (to add it or not)!');
        })
       
        event.preventDefault();
    }

    return (
        <><br></br><br></br>
        <h5>
        <i>
        <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6" style={{backgroundColor:"rgb(174, 241, 240)",borderRadius:"20px"}}>
            
            <Form className="form-horizontal"  onSubmit={handleSubmit} style={{marginLeft:"60px"}}><br></br>

                <Form.Group ><label><pre>NEAT PHOTO OF PRODUCT:  <br></br><br></br>   
                <Form.Control input type="file" name="img"  value={values.img} onChange={handleChange}/></pre>
                </label><br></br></Form.Group>

                <Form.Group >   <label><pre>ENTER PRODUCT NAME:<br></br><br></br>
                <Form.Control input type="text" name="productname" value={values.productname} onChange={handleChange} /></pre>
                </label></Form.Group><br></br><br></br>

                <Form.Group >   <label><pre>ENTER BRAND NAME:<br></br><br></br>
                <Form.Control input type="text" name="brandname" value={values.brandname} onChange={handleChange} /></pre>
                </label><br></br><br></br></Form.Group>

                <label><pre>SELECT CATEGORY:
                <select name="category" value={values.category} onChange={handleChange}>
                <option value="">**SELECT**</option>
                <option value="agriculture">AGRICULTURE</option>
                <option value="automobile">AUTOMOBILE</option>
                <option value="electric">ELECTRIC</option>
                <option value="electronic">ELECTRONIC</option>
                <option value="recycling">RECYCLING</option>
                <option value="others">--OTHERS--</option>
                
                </select> </pre>
                </label><br></br><br></br>

                <Form.Group >    <label><pre>ABOUT THE PRODUCT:<br></br><br></br>
                < Form.Control as="textarea" name="about" value={values.about} onChange={handleChange} style={{width:"300px"}} placeholder="specify the highlights"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >   <label><pre>CONTACT DETAILS:<br></br><br></br>
                < Form.Control input name="contact" type="text" value={values.contact} onChange={handleChange} style={{width:"300px"}} placeholder="website link (or) email id"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >    <label><pre>PLACE THE PRODUCT BUILD:<br></br><br></br>
                <Form.Control input name="place" type="text" value={values.place} onChange={handleChange}placeholder="country name"/></pre>
                </label></Form.Group><br></br>
                <center>
                <Button variant="danger" type="submit">
                    Submit
                </Button><br></br><br></br>
                </center>
               
            </Form>
            
        </div>   
        <div class="col-sm-3"></div> 
        </div>
        <br></br>
        </i></h5>
        </>
    )
    
}


export default Add;