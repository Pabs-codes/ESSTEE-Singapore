// Card.js

import React from 'react';
import './Card.css'; // You can style your card in a separate CSS file

const Card = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h2 className='title'>{title}</h2>
        <h2 className='subtitle'>{subtitle}</h2>
        <p className='description'>{description}</p>
      </div>
    </div>

    
  );
};

export default Card;
