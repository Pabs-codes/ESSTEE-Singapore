import React from 'react';
import './About.css';
import cimb from '../../Assets/cimb.svg'


const About = () => {
  return (
 
    <div className="about-container">
    <div className="left-content">
      <h2>About Esstee Singapore PTE Ltd</h2>
      <p>
        Welcome to Esstee Singapore PTE Ltd, a distinguished and dynamic Trading company at the forefront of Asia's business landscape. Our company prides itself on a vibrant and diversified portfolio, aspiring to achieve new heights in business turnover while offering the most extensive range of products to our esteemed clients.
      </p>
      <p>
        In our early days, Esstee embarked on its journey as an Import/Export and Intending agent. Recognizing the immense potential in the evolving Steel Industry, especially with post-war developments, we strategically partnered with key players in the global steel market. This collaboration enables us to import and distribute some of the finest and most durable steel for various development projects. Today, Esstee stands as a reputable and well-known steel supplier, catering to diverse requirements across industries.
      </p>
      <p>
        At Esstee Singapore PTE Ltd, we hold firm to the belief that our strength lies in the valued partnerships we establish with both our associates and clients. Our unwavering commitment and unmatched service levels position us as a trustworthy business partner, fostering enduring relationships with suppliers and customers alike.
      </p>
      </div>


      <div className="right-content">
      <div className="partner-page">
      <h2>Our Banking Partner : CIMB Singapore</h2>
      <img src={cimb} alt="CIMB Singapore Logo" />
      <p>
        Esstee Singapore PTE Ltd proudly partners with CIMB Singapore to bring you enhanced financial services and exclusive benefits. Through this collaboration, we aim to provide our clients with a seamless banking experience and additional value.
      </p>
      <p>
       
      </p>
      {/* <a href="https://www.cimb.com.sg/" target="_blank" rel="noopener noreferrer">Visit CIMB Singapore</a> */}
    </div>
    </div>

    </div>
       
       
  );
};

export default About;
