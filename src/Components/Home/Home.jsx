import React, { useEffect } from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Moving With Geet Relocation
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            If You Have Any Moveing Need, Simply Call Us 24 Hour Available
          </p>
          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="locationDiv"
          >
            <label htmlFor="location">Full Name</label>
            <input type="text" placeholder="Name*" />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="distDiv"
          >
            <label htmlFor="distance">Mobile No</label>
            <input type="text" placeholder="Mobile*" />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="priceDiv"
          >
            <label htmlFor="price">Location From</label>
            <input type="text" placeholder="Location*" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="priceDiv"
          >
            <label htmlFor="price">Location To</label>
            <input type="text" placeholder="Location To*" />
          </div>
          <button data-aos="fade-left" data-aos-duration="2000" className="btn">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
