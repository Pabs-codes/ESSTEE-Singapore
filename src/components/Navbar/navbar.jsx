import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
// import logoImage from "../../Assets/ESSTEEhq.png";
import logoImage2 from "../../Assets/estuk.png"

export const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex"> 
            <img
              className="logo"
              src={logoImage2}
              alt="Estee Singapore PTE.Ltd. Logo"
            />
          </Link>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/About" className="navLink">
                About Us
              </Link>
            </li>
 
            <li className="navItem">
              <Link to="/Services" className="navLink">
              Services
              </Link>
            </li>


            <li className="navItem">
              <Link to="/Products" className="navLink">
              Products
              </Link>
            </li>

            <li className="navItem">
              <Link to="/Corporation" className="navLink">
              Corporation Partners
              </Link>
            </li>

            <li className="navItem">
              <Link to="/Contact" className="navLink">
              Contact
              </Link>
            </li>


     

            <button className="btn">
              <Link to="/">Call Now</Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
