import React, { useEffect } from "react";
import "./Popular.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// import image
import servicesImg1 from "../../Assets/delivery-truck.png";
import servicesImg2 from "../../Assets/open-box.png";
import servicesImg3 from "../../Assets/moving.png";
import servicesImg4 from "../../Assets/warehouse.png";
import servicesImg5 from "../../Assets/crane.png";
import servicesImg6 from "../../Assets/forklift.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    servicesImgSrc: servicesImg1,
    destTitle: "Domestic Moving",
    location: "Domestic",
  },
  {
    id: 2,
    servicesImgSrc: servicesImg2,
    destTitle: "Household Removal & Storage",
    location: "Household",
  },
  {
    id: 3,
    servicesImgSrc: servicesImg3,
    destTitle: "Contract Logistics",
    location: "Contract",
  },
  {
    id: 4,
    servicesImgSrc: servicesImg4,
    destTitle: "Warehousing & Virtual Warehouse",
    location: "Warehousing",
  },
  {
    id: 5,
    servicesImgSrc: servicesImg5,
    destTitle: "Car Carriers",
    location: "Car",
  },
  {
    id: 6,
    servicesImgSrc: servicesImg6,
    destTitle: "Commercial Moving",
    location: "Commercial",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">OUR SERVICES</h2>
            <p>we offer the following services</p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, servicesImgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={servicesImgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      {grade}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
