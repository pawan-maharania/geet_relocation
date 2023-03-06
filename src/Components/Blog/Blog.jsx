import React, { useEffect } from "react";
import "./Blog.scss";
import { BsArrowRightShort } from "react-icons/bs";

import blog from "../../Assets/blog.jpg";
import loadingImg from "../../Assets/loading.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    servicesImgSrc: blog,
    imgTitle: "Title",
    readMore: "Read More",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Your Faith Is Our Responsibility
          </h2>
        </div>

        <div className="mainContainer grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singlePost grid"
          >
            <div className="imgDiv">
              <img src={blog} alt="Image Name" />
            </div>

            <div className="postDetails">
              <p data-aos="fade-up" data-aos-duration="4000">
                At Geet Relocation Movers and Packers Pune, we offer both local
                and long-distance moving services in Pune. We can help you move
                your home or business, move your car, pack and store your
                belongings. We have our own moving trucks that are stocked with
                all the tools needed to keep your valuables safe. We care a lot
                about the safety of your things, whether you are moving locally
                in Pune or from Pune to any other city in India. We take care of
                your move with the utmost care, keeping in mind our clients’
                needs and worries.
              </p>
            </div>

            <a
              href="#"
              className="flex"
              data-aos="fade-up"
              data-aos-duration="4500"
            >
              Read More
              <BsArrowRightShort className="icon" />
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singlePost grid"
          >
            <div className="imgDiv">
              <img src={loadingImg} alt="Image Name" />
            </div>

            <div className="postDetails">
              <p data-aos="fade-up" data-aos-duration="4000">
                Timely and safe delivery is of prime importance when moving
                within Pune or from Pune to another city. Our verified Pune
                Packers & Movers are expertize in packing your articles
                separately using air pocket wraps, bubble wraps, corrugated
                boxes, waterproof plastic boxes, cellophane sheets and also
                securing them with locks and seals to ensure tamper proof and
                safe delivery.
              </p>
            </div>

            <a
              href="#"
              className="flex"
              data-aos="fade-up"
              data-aos-duration="4500"
            >
              Read More
              <BsArrowRightShort className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
