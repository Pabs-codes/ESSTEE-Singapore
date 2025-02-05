import React from "react";
import "./ContactSection.css"; // Import CSS file for styling

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="office">
        <h3 class="typing-effect">
          HeadOffice <br /> Singapore | &#127480;&#127468;{" "}
        </h3>
        <p>42 cuff road, singapore, (209752) </p>
        <p>
          <strong>
            +65 8451 4840 <br /> {" "}
          </strong>{" "}
        </p>
        <p>
          <a href="mailto:sgtcmarketing@gmail.com">essteesingapore@gmail.com</a>
        </p>
      </div>

      <div className="office">
        <h3 class="typing-effect">
          Branch Office <br /> United Kingdom | &#127468;&#127463;
        </h3>
        <p>89 mandeville Road.Enfield. EN3 6SJ</p>
        <p>
          <strong>
            +44 798 459 8246 <br />
          </strong>
        </p>
        <p>
          <a href="mailto:info@stencoitc.com">info@essteesingapore.com</a>
        </p>
      </div>

      <div className="office">
        <h3 class="typing-effect">Banking Partners</h3>
        <p>
        CIMB Singapore  <br/>Barclays Bank UK PLC <br/> OCBC Singapore
        </p>
        
      </div>
    </div>
  );
}

export default ContactSection;
