

import React from 'react';
import Navbar from '../components/Navbar/navbar';
import './CorporationR.css';  // Import the CSS file
import Whatsapp from '../components/Uconstruction/Whatsapp';
import Footer from '../components/Footer/Footer';

const CorporationR = () => {
  return (
    <>
    <Navbar/>
    <div className="corporation-container">
      <img src="/media/cpartners.png" alt="Corporationimage" className="corporation-image" />
    </div>
    <Whatsapp/>
    <Footer/>
    </>
  );
}

export default CorporationR;
