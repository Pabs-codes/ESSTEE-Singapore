// Services.js

import React from 'react';
import './Services.css';
import video from '../../Assets/productmaking.mp4'
import video2 from '../../Assets/IBcut.mp4'

const Services = () => {
  return (
    <div className="services-container">
      <div className="left-content">
        <h2>Our Services</h2>
        <p>
          At Esstee Singapore PTE Ltd, we serve as a dedicated Intending Agent, facilitating both Imports and Exports. Our core expertise lies in being a leading supplier of Steel, Building Materials, Industrial Equipment, and Machinery originating from Sri Lanka.
        </p>
        <p>
          Since our establishment, Esstee has been actively exporting a diverse range of hardware products to numerous countries across South Asia, East Asia, Africa, and the Middle East.
        </p>
        <p>
          Our specialization revolves around the supply of Steel products, encompassing Structural Steel, Steel Plates, Wire Rods, Billets, Beams, Angles, Channels, Hollow Pipes, and a variety of Industrial equipment and machineries. Our extensive supply range spans from standard to non-standard sizes, covering materials such as carbon steel, alloy steel, stainless steel, Nickel Alloy, and Titanium. Constantly enhancing our supply capabilities and sourcing network remains pivotal to meeting customer demands and expanding our product repertoire—a key factor contributing to our company's success. We actively seek partnerships with individuals and companies worldwide, inviting capable individuals to collaborate with us as marketing agents.
        </p>
      </div>

      <div className="right-content">

      <div className="video-container">
      <iframe
        title="Esstee Company Video"
        width="560"
        height="315"
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <br/>

    <div className="video-container2">
      <iframe
        title="Esstee Company Video"
        width="560"
        height="315"
        src={video2}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
      </div>
    </div>
  );
};

export default Services;
