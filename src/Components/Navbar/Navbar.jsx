import React, { useState } from "react";
import "./Navbar.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  // code to toggle/show navBar
  const [active, setActive] = useState(`navBar`);
  const showNav = () => {
    setActive(`navBar activeNavbar`);
  };

  //  code to remove Navbar
  const removeNav = () => {
    setActive("navBar");
  };

  // code to add background color to the header....
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader ");
    } else {
      setTransparent("header ");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a className="logo">
            <h1 className="flex">
              <img src={logo} className="icon" />
              Geet Relocation
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="tel: +91 8619171384">8619171384</a>
              </button>
              <button className="btn ">
                <a href="tel: +91 7276951384">7276951384</a>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
