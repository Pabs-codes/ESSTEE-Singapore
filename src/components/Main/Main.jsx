import React, {useEffect} from 'react'
import "./main.css"
import { HiOutlineChevronDoubleUp, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'

import { Link } from 'react-router-dom';


import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'BILLETS',
    // location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Elevate your construction projects with our premium billets – the foundation for quality metalwork. Crafted with precision, these semi-finished metal blocks are ideal for creating sturdy bars, rods, and structural components. Choose reliability, choose our billets.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'WIRE RODS & RE BAR',
    // location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: "Unleash the strength of our wire rods and rebar products. From wiring solutions to reinforcing structures, our high-quality materials ensure durability and resilience. Secure your projects with the robust foundation provided by our wire rods and rebar."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'HOT ROLLED COILS',
    // location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: "Transform your manufacturing processes with our hot rolled coils. These versatile continuous sheets are the go-to choice for various industries. Whether it's automotive, construction, or manufacturing, our coils deliver flatness, uniformity, and exceptional strength."  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'HOT ROLLED CHECKERED COILS',
    // location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: "Make a statement with our hot rolled checkered coils. These sheets not only provide the strength and durability you need but also add a touch of sophistication with their distinctive checkerboard pattern. Elevate your flooring and transportation solutions with style."  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'HOT ROLLED PLATES, CHECKERED PLATES',
    // location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: "Meet the demands of robust construction and industrial applications with our hot rolled plates and checkered plates. Achieve structural integrity and slip-resistant surfaces for your projects. Our materials are the foundation for reliability and safety."  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'HOT ROLLED BEAMS, I BEAMS, H BEAMS',
    // location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: "Structural excellence begins with our hot rolled beams. Whether it's I beams or H beams, our steel shapes provide unparalleled strength and support. Ideal for construction and infrastructure projects, choose the reliability of our hot rolled beams for lasting performance."  },
 

]

export const Main = () => {

    // use react hooks to add a scroll animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Our Products</h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineChevronDoubleUp  className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      {/* <span>{grade}<small>+1</small></span> */}
                    </div>
                    <div className="price">
                      {/* <h5>{fees}</h5> */}
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>
             

              </div>
              
            )
          })
        }
        
      </div>

      <div className='exporemorebtn'>
      <Link to="/Products" className="navLink">
      <button className='bttn flex'>
                    Explore more products &#10151; 
                  </button> </Link>
      </div>


    </section>
  )
}

export default Main;