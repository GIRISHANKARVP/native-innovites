import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import  { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import "./List.css"

function List()
{
    // const Navbar = () => {
    // const [show, setShow] = useState(false)
    // const controlNavbar = () => {
    //     if (window.scrollY > 250 ) {
    //         setShow(true)
    //     }else{
    //       setShow(false)
    //     }
    // }
  
    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar)
    //     return () => {
    //         window.removeEventListener('scroll', controlNavbar)
    //     }
    // }, [])          
    // className={`active ${show && 'hidden'}`

return (
    <>
        <header  >
            <Navbar bg="white" variant="dark">
            <Container fluid={true}>
                <Nav>
                <div className='list'>
                    <NavLink to='/'className='list'>HOME</NavLink>
                    <NavLink to='/brands'className='list'>BRAND'S </NavLink>
                    <NavLink to='/add' className='list'>ADD</NavLink>
                    <NavLink to='/saved'className='list'>SAVED</NavLink>
                    <NavLink to='/yours'className='list'>YOUR'S</NavLink>
                </div>
                </Nav>
            </Container>
            </Navbar>
        </header>

        </>
    )
}


export default List;