import React from 'react';
import './Footer.css'; 


const handleSubmit = (event) => {
  event.preventDefault();

  // Get values from form
  const email = event.target.email.value;
  const message = event.target.message.value;

  // Compose mailto link
  const mailtoLink = `mailto:info@essteesingapore.com?subject=New Inquiry&body=${encodeURIComponent(
    `Email: ${email}%0A%0AMessage: ${message}`
  )}`;

  // Open default email client
  window.location.href = mailtoLink;
};

const myStyle = {
    someStyleProperty: 'someValue',
    color: 'white',
    padding: '2px 2px 2px 2px',
  };
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-address">
          <h4>Address</h4>
          <p>No:42,<br/> Cuff Road,<br/> Singapore, <br/> 209752 </p>
          <a
    href="https://www.google.com/maps/place/Singapore/@1.3139946,103.6794356,11z/data=!3m1!4b1!4m6!3m5!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836!16zL20vMDZ0MnQ?entry=ttu"
    target="_top" 
    className="location-button"
  >
    View Location
  </a>
          
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="social-icons">
          <p>+65 8451 4840

  _<br/> +65 8451 4840    </p>
          {/* <a href="https://www.facebook.com/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> */}
          <a href="https://wa.me/+94777751550" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          {/* <a href="https://www.instagram.com/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
          {/* <a href="https://www.linkedin.com/in/rupasinghesteels" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a> */}

        </div>
          <p>Email: <br/>info@essteesingapore.com     <br/>export@essteesingapore.com </p>
      
       
      

        </div>
        <div className="footer-office">
          <h4>Office Hours</h4>
          <p>Weekdays:<br/> 9 AM - 5:30 PM</p>
        </div>

        <div className="footer-message">      
        <h4>Send us a message</h4>
           <form onSubmit={handleSubmit}>
  <input type="email" id="email" name="email" placeholder="Enter your email" />
  <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
  <button type="submit">Send</button>
        </form>
       </div>


      </div>
     

   

{/* <div className="footer-map">

      <iframe
          title="Rupasinghe Steels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7923.479828980889!2d79.8471677!3d6.9499247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581bc2d37227%3A0x22699eef6942b574!2s357%20Kandy%20Rd%2C%20Peliyagoda%2011300!5e0!3m2!1sen!2slk!4v1665548899517!5m2!1sen!2slk&maptype=satellite"
          width="100%"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
     

      <div className="footer-copyright">
  <p className="copyright-text">© 2025 ESSTEE Singapoore PTE.Ltd. All rights reserved.</p>
  <p className="credit-text">
    Designed and developed by Pabs-Codes 
    <a href="https://www.linkedin.com/in/pabasaranavod/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin" style={myStyle}></i>
</a>
<a href="mailto:pabscodes@gmail.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-google" style={myStyle}></i>
</a>
     |   Stenco-IT-Solutions <img src="./media/stenco logo.png" alt="StencoITC Logo" className="stenco-logo" />
  </p>
</div>



    </footer>
  );
};

export default Footer;
