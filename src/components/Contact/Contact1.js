import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/navbar';
import Whatsapp from '../Uconstruction/Whatsapp';
import ContactSection from './ContactSection';


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="contact-info">

        <div className="info-section">
          <h2 className="info-heading">Address</h2>
          <p className="info-text">
          42 cuff road, <br/> 
          singapore,<br/>
          (209752)</p>
          <a
          className="map-link"
          href="https://www.google.com/maps/dir/6.9508494,79.8632827/357+Kandy+Rd,+Peliyagoda+11300/@6.9566593,79.8471677,13604m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae2581bc2d37227:0x22699eef6942b574!2m2!1d79.9121432!2d6.9690497?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
          </div>
        <div className="info-section">
          <h2 className="info-heading">Contact Numbers</h2>
          <p className="info-text">+65 8451 4840</p>
        </div>
        <div className="info-section">
          <h2 className="info-heading">Email</h2>
          <p className="info-text">export@essteesingapore.com <br/> info@essteesingapore.com</p>
        </div>
        <div className="info-section">
          <h2 className="info-heading">Office Hours</h2>
          <p className="info-text">Weekdays: 9 AM - 5:30 PM</p>
        </div>
      
      </div>

      <div className="message-container">
        <h2 className="message-heading">Send us a Message</h2>
        <form>
          <label htmlFor="name" className="form-label">Your Name:</label> 
          <input type="text" id="name" name="name" className="form-input" required />

          <label htmlFor="email" className="form-label">Your Email:</label>
          <input type="email" id="email" name="email" className="form-input" required />

          <label htmlFor="message" className="form-label">Your Message:</label>
          <textarea id="message" name="message" className="form-textarea" required></textarea>
           <br/>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
    
   <Whatsapp/>
   <ContactSection/>
   

      </>
  );
};

export default Contact;




