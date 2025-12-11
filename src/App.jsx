import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
=======
import { useState } from "react";
import Useeffect from "./components/Useeffect";
import Ternaryoperator from "./components/Ternaryoperator";
import Firstcomponent from "./components/Firstcomponent";
import FormEvents from "./components/FormEvents";
>>>>>>> 82cb665 (FormEvents)

const App = () => {
  return (
    <div>
<<<<<<< HEAD
     <Navbar/>
       
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
=======
      <FormEvents/>

>>>>>>> 82cb665 (FormEvents)
    </div>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 82cb665 (FormEvents)
export default App;
