import React from 'react' ;
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";

import intro from './IMAGE/intro.png';

import { Suspense } from 'react';

import All from './HOME/All';

function Home()
{
return (
    <> 
    
    <Introimg/>
    <Suspense fallback={<div>Loading...</div>}>
        <section>
          {/* <OtherComponent /> */}
          <All/>
        </section>
    </Suspense>
    
    </>
)
}
export default Home;

function Introimg()
{
    return(
        <>
        <br></br><br></br>
        <center>
        <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
        <div style={{ display: "block", padding:15}}>
        <Image src={intro} fluid rounded/>
        </div>
        <div class="col-sm-1"></div>
        </div>
        </div>
        </center><br></br><br></br>
        </>
    );
}
