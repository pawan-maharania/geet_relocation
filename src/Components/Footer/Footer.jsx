import React, { useEffect } from "react";
import "./Footer.scss";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import logo from "../../Assets/logo.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="#" className="logo flex">
              <h3 className="flex">
                <img src={logo} className="icon" />
                Geet Relocation
              </h3>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Traval</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="4000"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links</span>

          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Traval & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="5000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>

          <span className="phone">+91 8619171384</span>
          <span className="phone">+91 7276951384</span>
          <span className="email">pawan@geetrelocation.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
