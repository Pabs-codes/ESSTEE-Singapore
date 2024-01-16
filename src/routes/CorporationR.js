

import React from 'react';
import Navbar from '../components/Navbar/navbar';
import './CorporationR.css';  // Import the CSS file

const CorporationR = () => {
  return (
    <>
    <Navbar/>
    <div className="corporation-container">
      <img src="/media/cpartners.png" alt="Corporationimage" className="corporation-image" />
    </div>
    </>
  );
}

export default CorporationR;
