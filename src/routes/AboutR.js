// AboutR.js
import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import About from '../components/About/About';
import ScrollToTopButton from '../components/Uconstruction/ScrollToTopButton';
import Whatsapp from '../components/Uconstruction/Whatsapp';
import Footer from '../components/Footer/Footer';

const AboutR = () => {
  return (
   <>
    <Navbar/>
    <About/>
    <ScrollToTopButton/>
    <Whatsapp/>
    <Footer/>
   
    </>
  );
};

export default AboutR;
