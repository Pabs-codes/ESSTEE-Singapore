import AboutR from "./routes/AboutR";
import HomeR from "./routes/HomeR";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeR />} />
      <Route path="/About" element={<AboutR/>} />
    </Routes>
  );
}







/*

import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About"; 
import Service from "./routes/Service";
import Projects from "./routes/Projects";
import Products from "./routes/Products"; 
import Contact from "./routes/Contact"; 
// import Error from "./routes/Error";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      

   
      </div>
      );
    }
    

*/