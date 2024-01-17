// AboutR.js
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import About from '../components/About/About';
import ScrollToTopButton from '../components/Uconstruction/ScrollToTopButton';
import Whatsapp from '../components/Uconstruction/Whatsapp';

const AboutR = () => {
  return (
   <>
    <Navbar/>
    <About/>
    <ScrollToTopButton/>
    <Whatsapp/>
   
    </>
  );
};

export default AboutR;
