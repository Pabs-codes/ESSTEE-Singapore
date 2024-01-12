import React,{useEffect} from 'react'
import "./footer.css"
import video2 from "../../Assets/video.mp4"
import { FiSend, FiChevronRight } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
// import stenco from "../../Assets/stenco logo.png"

import Aos from "aos"
import 'aos/dist/aos.css'


const Footer = () => {

  // use react hooks to add a scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

 

  return (
    <section className="footer">

      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH with</small>
            <h2>ESSTEE Singapore</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'> SEND < FiSend className='icon' /> </button>
          </div>
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex' >
                <MdOutlineTravelExplore className='icon' />ESSTEE SINGAPORE
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Rooted in a legacy of import/export and intending, our evolution was catalyzed by a strategic shift towards the burgeoning Steel Industry. In the wake of post-war developments, ESSTEE forged pivotal partnerships with global leaders in the Steel Industry, solidifying our position as a key player in import and distribution.

       At ESSTEE, we don't just trade; we pioneer. Our vision is not only to meet industry standards but to set them. Join us in shaping the future of commerce, where innovation, reliability, and customer satisfaction converge. Explore the ESSTEE advantage and witness the synergy of tradition and progress in every business endeavor."
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
              Partners
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
              Banks
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Team
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                Services
              </li>

            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
               Countries
              </span>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                China
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
               Srilanka
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
               more
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                more
              </li>

              <li className="footerList flex">
                < FiChevronRight className='icon' />
                India
              </li>

            </div>


          </div>

          <div className="footerDiv flex">
            <small>© 2024 ESSTEE SINGAPORE PTE Ltd. All rights reserved.</small>
           {/* <small className='small2'>Designed and developed by Pabs-Codes |  <a href="https://www.linkedin.com/in/pabasara-navod/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
    StencoITC  <img src={stenco} alt="StencoITC Logo" className="stenco-logo" />
         </small> */}
     
       
          </div>

        </div>

      </div>

    </section>
  )
}

export default Footer;