import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import axios from "axios";
    

export const Add= ()=>
{
    const [loading,setloading]=useState(false)
    const [image,setimage]=useState("")   
   

    const initialValues = 
    {
        img:"",
        name:"",
        brand: "",
        cat: "",
        year:"",
        details: "",
        orgin: "",
        source: ""
        
    };
      const [values, setValues] = useState(initialValues);
    
      
    const handleChange = (e) =>
    {
        const  value  = e.target.value;
        //console.log(values);
        setValues({ 
        ...values,  // so that it will handle multiple data
        [e.target.name]: value
        });
    };



    const uploadImg=async e=>
    {
        const files=e.target.files;
        const data =new FormData()
        data.append('file',files[0])
        data.append('upload_preset','native-innovites')
        setloading(true)

        const res=await fetch("https://api.cloudinary.com/v1_1/dfbpgglx0/image/upload",
        {
            method:'POST',
            body:data
        })
        const file=await res.json()
        console.log(file)
        setimage(file.secure_url)
        setloading(false)
    }

    const handleSubmit=(event)=> {

        const formdata =
        {
            img:image,
            name:values.productname,
            brand: values.brandname,
            cat: values.category,
            year: values.year,
            details: values.about,
            orgin: values.place,
            source: values.contact
           
        }
        axios.post("http://localhost:3001/adding/form",formdata)
        .then(()=>{
        
            alert('THANK YOU for filling the form. Your details has been collected and it go for decision making(to add it or not)!');
        })
       event.preventDefault();

        setValues(
            {
                file:"",
                productname:"",
                brandname: "",
                category: "",
                year:"",
                about: "",
                place: "",
                contact: ""

            }
        );
        
    }

    return (
        <><br></br><br></br>
        <h5>
        <i>
        <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6" style={{backgroundColor:"rgb(174, 241, 240)",borderRadius:"20px"}}>
            
            <Form className="form-horizontal"  onSubmit={handleSubmit} style={{marginLeft:"60px"}}><br></br>

                <Form.Group ><label><pre>NEAT PHOTO OF THE PRODUCT:  <br></br><br></br>   
                <Form.Control input type="file" name="file" onChange={uploadImg} /></pre>
                </label><br></br></Form.Group>

                <Form.Group >   <label><pre>ENTER PRODUCT NAME:<br></br><br></br>
                <Form.Control input type="text" name="productname" value={values.productname} onChange={handleChange} /></pre>
                </label></Form.Group><br></br>

                <Form.Group >   <label><pre>ENTER BRAND NAME:<br></br><br></br>
                <Form.Control input type="text" name="brandname" value={values.brandname} onChange={handleChange} /></pre>
                </label><br></br><br></br></Form.Group>

                <label><pre>SELECT CATEGORY:
                <select name="category" value={values.category} onChange={handleChange}>

                <option value=" ">--SELECT--</option>
                <option value="agriculture">AGRICULTURE</option>
                <option value="automobile">AUTOMOBILE</option>
                <option value="electric">ELECTRIC</option>
                <option value="electronic">ELECTRONIC</option>
                <option value="recycling">RECYCLING</option>
                <option value="software">SOFTWARE</option>
                <option value="***others***">-OTHERS-</option>
                
                
                </select> </pre>
                </label><br></br><br></br>

               
                <Form.Group >    <label><pre>ABOUT THE PRODUCT:<br></br><br></br>
                < Form.Control as="textarea" name="about" value={values.about} onChange={handleChange} style={{width:"300px"}} placeholder="specify the highlights"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >   <label><pre>CONTACT DETAILS:<br></br><br></br>
                < Form.Control input name="contact" type="text" value={values.contact} onChange={handleChange} style={{width:"300px"}} placeholder="website link (or) email id"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >    <label><pre>PRODUCT BUILD PLACE:<br></br><br></br>
                <Form.Control input name="place" type="text" value={values.place} onChange={handleChange}placeholder="country name"/></pre>
                </label></Form.Group><br></br>

                <Form.Group >    <label><pre>PRODUCT LAUNCH YEAR:<br></br><br></br>
                < Form.Control input type="number" name="year" value={values.year} onChange={handleChange}  placeholder="ex:2020"/></pre>
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