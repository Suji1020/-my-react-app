import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import Useeffect from "./components/Useeffect";
import Ternaryoperator from "./components/Ternaryoperator";
import Firstcomponent from "./components/Firstcomponent";
import FormEvents from "./components/FormEvents";


const App = () => {
  return (
    <div>
     <Navbar/>
       
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FormEvents/>


    </div>
  );
}

export default App;
