import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logoImage from "../../Assets/ESSTEEhq.png";

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
          <Link to="/" className="logo flex"> {/* Use Link instead of 'a' */}
            <img
              className="logo"
              src={logoImage}
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

            {/* Add similar changes for other navigation links */}

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
