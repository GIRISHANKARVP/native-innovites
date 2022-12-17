import React from 'react' ;
import {Routes,Route } from 'react-router-dom';

import Home from './Components/Home';
import Brands from './Components/Brands';
import Add from './Components/Add';
import Saved from './Components/Saved';
import Yours from './Components/Yours';

import Details from "./Components/HOME/Details";

import List from './Components/List';

const App =()=> {
    return(
        <>
       
        <List/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/brands" element={<Brands/>}/>
        <Route  path="/add" element={<Add/>}/>
        <Route  path="/saved" element={<Saved/>}/>
        <Route  path="/yours" element={<Yours/>}/>
        
        <Route  path="/details" element={<Details/>}/>
            
            
        </Routes>
        </>
    )
}
export default App;