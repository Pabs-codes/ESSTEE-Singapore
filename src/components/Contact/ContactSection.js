import React from 'react';
import './ContactSection.css'; // Import CSS file for styling

function ContactSection() {
  return (
    <div className="contact-section">


      <div className="office">
        <h3 class="typing-effect">Representative Office <br/> Singapore  |  &#127480;&#127468; </h3>
        <p>Blk 1D, Cantonent Road, #21-43, Pinnacle @ Duxton, Singapore 085401.</p>
        <p><strong>+65 91901970 <br/> +94 777 51550  </strong> </p>
        <p><a href="mailto:sgtcmarketing@gmail.com">essteesingapore@gmail.com</a></p>
      </div>

      <div className="office">
        <h3 class="typing-effect">Representative Office <br/> United Kingdom | &#127468;&#127463;</h3>
        <p>89 mandeville Road.Enfield. EN3 6SJ</p>
        <p><strong>+44 798 459 8246 <br/> +94 777 51550</strong></p>
        <p><a href="mailto:info@stencoitc.com">info@essteesingapore.com</a></p>
      </div>

      <div className="office">
        <h3 class="typing-effect">Banking Partners</h3>
        <p><strong>CIMB Singapore </strong></p>
        <p><strong>Barclays Bank UK PLC </strong></p>

        
      </div>
    </div>
  );
}

export default ContactSection;
