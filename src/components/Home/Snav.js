import React, { useState , useEffect } from 'react';
import './Snav.css';
import briefcaseIcon from '../../Assets/icons8-briefcase.gif';
import SolutionIcon from '../../Assets/solutions.png';
import Safety from '../../Assets/icons8-safety.gif';
import Excellence from '../../Assets/icons8-handshake.gif';
import Sus from '../../Assets/icons8-growth.gif';
import Cont from '../../Assets/icons8-gear-48.png';

import BI from '../../Assets/bi.jpg';
import IS from '../../Assets/is.jpg';
import FT from '../../Assets/ft.jpg';
import IC from '../../Assets/ic.jpg';

import DrSThiruchelvamProfilePDF from '../../Assets/Dr S thiruchelvam profile 2.pdf';
import DirectorProfileImage from '../../Assets/DP.png';





const Snav = ({ onSelect, selectedItem }) => {
  return (
    <div className="S-navi">
      <ul className="Sulclass">
        <li className={`Snavclass ${selectedItem === 'Why Choose Us' ? 'active' : ''}`}>
          <a href="#Why Choose Us" className="Snavclass" onClick={() => onSelect('Why Choose Us')}>
          Why choose us
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'Working Area' ? 'active' : ''}`}>
          <a href="#Working Area" className="Snavclass" onClick={() => onSelect('Working Area')}>
            Working Area
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'DirectorProfile' ? 'active' : ''}`}>
          <a href="#DirectorProfile" className="Snavclass" onClick={() => onSelect('DirectorProfile')}>
            Director Profile
          </a>
        </li>
        <li className={`Snavclass ${selectedItem === 'Trade and Export' ? 'active' : ''}`}>
          <a href="#Trade and Export" className="Snavclass" onClick={() => onSelect('Trade and Export')}>
            Trade and Export
          </a>
        </li>
      </ul>
    </div>
  );
};


const WhychooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <div className="why-choose-us-item">
        <h2>   <img src={briefcaseIcon} alt="Briefcase Icon" className="iconw" /> Over a Decade of  Expertise</h2>
        <p className="why-choose-us-description">
          Navigating challenges with finesse, our ten years of experience set us apart. Trust in our seasoned expertise for unparalleled solutions.
        </p>
      </div>

      <div className="why-choose-us-item">
        <h2>  <img src={SolutionIcon} alt="SolutionIcon" className="iconw" />End-to-End Solutions</h2>
        <p className="why-choose-us-description">
          From start to finish, our comprehensive approach ensures seamless processes, integrating strategies for optimal and efficient results.
        </p>
      </div>

      <div className="why-choose-us-item">
        <h2> <img src={Safety} alt="Briefcase Icon" className="iconw" />Commitment to Safety and Compliance</h2>
        <p className="why-choose-us-description">
          Prioritizing safety and regulatory compliance, our strategies create a secure and compliant environment, ensuring peace of mind.
        </p>
      </div>

      <div className="why-choose-us-item">
        <h2>  <img src={Excellence} alt="Briefcase Icon" className="iconw" /> Dependable Excellence</h2>
        <p className="why-choose-us-description">
          Building trust through reliability, our dependable services form the cornerstone of strong and enduring client relationships.
        </p>
      </div>

      <div className="why-choose-us-item">
        <h2> <img src={Sus} alt="Briefcase Icon" className="iconw" />Sustainable and Profitable Growth</h2>
        <p className="why-choose-us-description">
          Focused on sustainable practices, our strategies drive not just growth but profitable growth, ensuring long-term success and prosperity.
        </p>
      </div>

      <div className="why-choose-us-item">
        <h2> <img src={Cont} alt="Briefcase Icon" className="iconwr" />Continuous Improvement</h2>
        <p className="why-choose-us-description">
          Committed to perpetual enhancement, our culture of improvement ensures methods that stay ahead of the curve, meeting evolving needs.
        </p>
      </div>
    </div>
  );
};



const WorkingArea = () => {
  return (
    <div className='WA-container'>
      <div className='WA-item'>
        <h2>Building Installation</h2>
        <img src={BI} alt="SolutionIcon" className="WAimg" />
        <p className='WAp'>
          Explore our expertise in installing cutting-edge structures, blending the timeless elegance of plaid with heirloom craftsmanship. Discover the sartorial touch in every project, inspired by American Apparel trends and the distinct character of Shoreditch. Our commitment is as flexible as a flexitarian's palate, ensuring your installation journey is as satisfying as a perfectly cooked pork belly.
        </p>
      </div>

      <div className='WA-item'>
        <h2>Industrial Services</h2>
        <img src={IS} alt="SolutionIcon" className="WAimg" />
        <p className='WAp'>
          Experience the fusion of plaid heirloom aesthetics and the sartorial finesse of American Apparel within our industrial services. Navigate the Shoreditch-inspired landscape as we provide tailored solutions, offering the flexibility of a flexitarian approach. Just as a succulent pork belly satisfies diverse tastes, our services cater to the unique needs of the industrial realm.
        </p>
      </div>

      <div className='WA-item'>
        <h2>Fuel Supply and Management</h2>
        <img src={FT} alt="SolutionIcon" className="WAimg" />
        <p className='WAp'>
          Elevate your fuel supply and management with our plaid-infused, heirloom-inspired approach. Drawing inspiration from the sartorial essence of American Apparel, our services in Shoreditch style ensure a flexible, flexitarian experience. Like the tenderness of a perfectly prepared pork belly, our solutions promise satisfaction and reliability.
        </p>
      </div>

      <div className='WA-item'>
        <h2>Industrial Control</h2>
        <img src={IC} alt="SolutionIcon" className="WAimg" />
        <p className='WAp'>
          Step into the realm of industrial control where plaid meets heirloom in a sartorial dance influenced by American Apparel trends. Our Shoreditch-inspired approach ensures flexibility akin to a flexitarian's palate, offering control solutions as rich and satisfying as a meticulously crafted pork belly.
        </p>
      </div>
    </div>
  );
};






const DirectorProfile = () => {
  return (
    <div className='DirectorProfile-container'>
        <img
        src={DirectorProfileImage}
        alt="Director Profile"
        style={{ width: '100%', height: 'auto' }}
      />

<div className="download-button-container">
        <a
          href={DrSThiruchelvamProfilePDF}
          download="Dr_S_thiruchelvam_profile.pdf"
          className="download-button"
        >
          Download PDF
        </a>
      </div>

    </div>
  );
};

const TradeAndExport = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate loading progress
      if (loadingPercentage < 70) {
        setLoadingPercentage(loadingPercentage + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [loadingPercentage]);

  return (
    <div className="under-construction-container">
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${loadingPercentage}%` }}>
          <span className="loading-percentage">{loadingPercentage}%</span>
        </div>
      </div>
      <div className="construction-message">
        <h2>Under Construction</h2>
        <p>We're working on this panel! Check back soon.</p>
      </div>
    </div>
  );
};

// automatic navigation


const App = () => {
  const [selectedItem, setSelectedItem] = useState('Why Choose Us');

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    let intervalId;

    const startAutomaticNavigation = () => {
      intervalId = setInterval(() => {
        // Get the current index of the items
        const items = ['Why Choose Us', 'Working Area', 'DirectorProfile', 'Trade and Export'];
        const currentIndex = items.indexOf(selectedItem);

        // Calculate the next index
        const nextIndex = (currentIndex + 1) % items.length;

        // Update the selected item
        setSelectedItem(items[nextIndex]);
      }, 50000);
    };

    // Start automatic navigation initially
    startAutomaticNavigation();

    return () => {
      // Clear the interval when the component is unmounted or when the user clicks an item
      clearInterval(intervalId);
    };
  }, [selectedItem]);
  return (
    <div>
     <Snav onSelect={handleSelect} selectedItem={selectedItem} />

      {/* Render content based on the selected item */}
      {selectedItem && (
        <div>
          {selectedItem === 'Why Choose Us' && <WhychooseUs />}
          {selectedItem === 'Working Area' && <WorkingArea/>}
          {selectedItem === 'DirectorProfile' && <DirectorProfile />}
          {selectedItem === 'Trade and Export' && <TradeAndExport />}
        </div>
      )}
    </div>
  );
};

export default App;
