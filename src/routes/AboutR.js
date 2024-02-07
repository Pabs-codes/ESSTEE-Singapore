// AboutR.js
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import About from '../components/About/About';
import ScrollToTopButton from '../components/Uconstruction/ScrollToTopButton';
import Whatsapp from '../components/Uconstruction/Whatsapp';
import Whatsapp2 from '../components/Uconstruction/Whatsapp2';

import Footer from '../components/Slider/Footer/Footer';

const AboutR = () => {
  return (
   <>
    <Navbar/>
    <About/>
    <ScrollToTopButton/>
    <Whatsapp/>
    <Whatsapp2/>
    <Footer/>
   
    </>
  );
};

export default AboutR;
