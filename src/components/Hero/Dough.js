import React from 'react';
import Donutchart from './Donutchart';
import "./Donut.css";

const Dough = () => {
  return (
    <div className='containerer'>
      <div className='left-side'>
        
        <h2>Our extensive distribution network  <br/> covers the globe, </h2>
        <p>contributing to our enduring success. Our profound understanding of the steel market is key to our achievements. With our worldwide presence, we stay closely attuned to trade patterns and the evolving dynamics of local steel markets. This strategic positioning empowers us to enhance our partners' supply chains with unparalleled value..</p>
      </div>
      <div className='right-side'>
        <Donutchart />
      </div>
    </div>
  );
}

export default Dough;
