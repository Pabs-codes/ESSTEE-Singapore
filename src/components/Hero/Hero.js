import React from 'react'
import "./Hero.css"
import "./s.css"

import hero_back from "../../assets0/hero_image_back.png"

import order from "../../assets0/order.png"
import destination from "../../assets0/destinations.png"
import office from "../../assets0/office.png"
import globe from "../../assets0/globe.png"

import { motion } from "framer-motion"
import NumberCounter from "number-counter";





const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
  
    
    <div className="hero" id='home'>

        
      <div className="blur hero-blur"></div>

      <div className="left-h">
        {/* <Header/> */}
    
        {/* the best ad */}
        <div className="the-best">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>"Steel Strong : Forged Futures Ahead."</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Smart navigation</span> <br/>
            <span>  of steel trade  </span>
          </div>
          <div>
          </div>
          <div>
            <span>
            "Steelforce: Pioneering sustainable steel solutions in a changing world."
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
                <img className='iconclass' src={order} alt='ordericon'/>
              <NumberCounter end={67} start={10} delay={4} preFix="+" />
            </span>
            <span>Annual <br/> orders</span>
          </div>
          <div>
            <span>
            <img className='iconclass' src={office} alt='office icon'/>
              <NumberCounter end={2} start={1} delay={4} preFix="+" />
            </span>
            <span>Global <br/> offices</span>
          </div>
          <div>
            <span>
            <img className='iconclass' src={destination} alt='destinationicon'/>
              <NumberCounter end={6} delay={2} preFix="+" />
            </span>
            <span>Active <br/> destinations</span>
          </div>

          <div>
            
            <span>
            <img className='iconclass' src={globe} alt='globe icon'/>
              <NumberCounter end={5} delay={2} preFix="+" />
            </span>
            <span>Active <br/> origins</span>
          </div>
          
        </div>

       

      
      </div>

      {/* Right Side */}
      <div className="right-h">
      {/* <Link className="btn"
              to="contact"
              spy={true}
              smooth={true}
            >
              social links + buttons here
            </Link> */}

        {/* heart rate */}
        {/* <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div> */}

        

        {/* hero images */}
       <div className='abtdiv'>
      <div className="barcontainer">
            <h1 className="bartitle-text">Evolution tonnage (‘000 mt)</h1>

            <div className="skill-box">
                <span className="title">2019</span>
                <div className="skill-bar">
                    <span className="skill-per dahanamaya">
                        <span className="tooltip">575</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">2020</span>
                <div className="skill-bar">
                    <span className="skill-per wissa">
                        <span className="tooltip">725</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">2021</span>
                <div className="skill-bar">
                    <span className="skill-per wisieka">
                        <span className="tooltip">700</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">2022</span>
                <div className="skill-bar">
                    <span className="skill-per wisideka">
                        <span className="tooltip">950</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">2023</span>
                <div className="skill-bar">
                    <span className="skill-per wisituna">
                        <span className="tooltip">990</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title">2024</span>
                <div className="skill-bar">
                    <span className="skill-per wisihatara">
                        <span className="tooltip">1100</span>
                    </span>
                </div>
            </div>

            <div className="skill-box">
                <span className="title2">2025</span>
                <div className="skill-bar">
                    <span className="nowskill-per wisipaha">
                        {/* <span className="tooltip"></span> */}
                    </span>
                </div>
            </div>
        
        </div>
        </div>

        <motion.img
            initial={{right: mobile? "11rem": '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        {/* calories */}
        {/* <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div> */}
      </div>








  
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>



           


    </div>
  );
};

export default Hero;
