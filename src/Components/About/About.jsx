import React, { useEffect } from "react";
import "./About.scss";

import { BsDot } from "react-icons/bs";

// Import Image============>
import img1 from "../../Assets/aboutUs.png";
import img2 from "../../Assets/aboutUs2.png";
import img3 from "../../Assets/timeBound.jpg";

// Import video============>
import video from "../../Assets/clip2.mp4";

// Import aos effects

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Why Geet Relocation ?</div>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={img1} alt="Image name" />

            <h3>No Hidden Charges</h3>
            <li></li>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={img2} alt="Image name" />

            <h3>Fast And Secure Move</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={img3} alt="Image name" />

            <h3>Time Bound Deliveries</h3>
          </div>
        </div>

        <div className=" videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>
                Shifting Expert Top Pachers & Movers Pune Surprising Rates Rs.
                1000-3000{" "}
              </h2>
              <p>
                Our Company has a broad network across the country and it
                becomes a tough to hire one of the relocation needs for movers &
                packaging So thats why Our Company insure that we provide you
                the best services at a very affordable rates. We make use of
                some the latest technology when it comes to moving & packaging.
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
