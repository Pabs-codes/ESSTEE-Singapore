import React, { useEffect } from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import { FaTruck, FaShieldAlt, FaFileSignature , FaShip } from 'react-icons/fa';
// import { GrLocation } from 'react-icons/gr';

// import { FiFacebook } from 'react-icons/fi';
// import { AiOutlineInstagram } from 'react-icons/ai';

// import { BsListTask } from 'react-icons/bs';
// import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // use react hooks to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            welcome to
          </span>

          <h1 data-aos="fade-up" className="homeTittle">
            ESSTEE Singapoore PTE.Ltd.{''}
          </h1>
        </div>

        <div data-aos="fade-up" className="abtdiv">
          <div className="aboutCompany">
            <p>
              <strong>Who are we ?</strong>
            </p>
            <p>
            ESSTEE Singapore Pte Ltd. stands as a prominent trading company in Asia. With a
             vibrant and diversified portfolio, our vision at ESSTEE is to achieve 
             greater heights in business turnover and maintain the largest product 
             portfolio for our valued clients. <br/> <br/>
            </p>
            <p>
            Our journey began with a focus on Import/Export and Intending.
             Over time, recognizing the significant potential in the 
             Steel Industry, especially with post-war developments, 
             ESSTEE decided to collaborate with key players in the 
             global Steel Industry for import and distribution.
            </p>
          </div>

          <div className="searchOptions flex">
            {/* <HiFilter className="icon" />
            <span>Read More</span> */}

            <div className="servicesContainer">
    <div className="serviceItem">  <p> Import & Export <br/>  <FaShip size={19} /> </p> </div>
    <div className="serviceItem"> <p>Logistics  <br/> <FaTruck size={19} /> </p></div>
    <div className="serviceItem"><p>Insurance   <br/> <FaShieldAlt size={19}/></p></div>
    <div className="serviceItem"><p>Customs & Clearance  <br/><FaFileSignature size={19}/></p></div>
  </div>
          </div>

         
        </div>

        {/* <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
