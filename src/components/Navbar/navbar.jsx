import React, {useState} from 'react'
import "./navbar.css"

// import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logoImage from '../../Assets/ESSTEEhq.png'


export const Navbar = () => {

    const [active, setActive] = useState('navBar') ;

    // function to toggle navBar
    const showNav = ()=> {
        setActive('navBar activeNavbar');
    }

    // function to remove navBar
    const removeNavbar = ()=> {
        setActive('navBar');
    }


  return (
    <section className='navBarSection' >
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='/' className='logo flex'>
                <img
            className="logo"
            src={logoImage}
            alt="Estee Singapoore PTE.Ltd. Logo"
          />
                </a>
            </div>

            <div className={active}>
                <ul className='navList flex'>

                    <li className='navItem'>
                        <a href='/' className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href='/About' className='navLink'>About Us</a>
                    </li>

                    <li className='navItem'>
                        <a href='/Services' className='navLink'>Services</a>
                    </li>

                    <li className='navItem'>
                        <a href='/Products' className='navLink'>Products</a>
                    </li>

                    <li className='navItem'>
                        <a href='/Corporation' className='navLink'> Corporation Partners</a>
                    </li>

                    <li className='navItem'>
                        <a href='/' className='navLink'>Contact</a>
                    </li>


                    <button className='btn'>
                        <a href="/">Call Now</a>
                    </button>

      

                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
                    < TbGridDots className='icon' />
            </div>

        </header>
    </section>
  )
}

export default Navbar;