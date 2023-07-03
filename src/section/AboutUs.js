import imgAboutUs from "../assets/about-us.jpg";

import { BsChatLeftHeart, BsShieldShaded, BsTrophy } from "react-icons/bs";

import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <section>
      <h1>About us</h1>
      <div className="aboutUs-container">
        <div className="aboutUs-container-img">
          <img className="aboutUs-img" src={imgAboutUs} alt="bucik"></img>
        </div>
        <div className="aboutUs-description">
          <h2 className="aboutUs-title">
            We Are Awesome Shoes Collection In World
          </h2>
          <span className="aboutUs-description">
            Welcome to our exquisite shoe shop, where every step is a statement
            of style and sophistication. Our meticulously curated collection
            showcases the finest footwear from renowned designers, ensuring that
            you will find the perfect pair to suit your taste and elevate your
            fashion game.
          </span>
          <button className="btn-contactUs">Contact Us</button>
        </div>
      </div>
      <div className="aboutUs-container-bottom">
        <div className="aboutUs-container">
          <div className="aboutUs-container-index">
            <BsChatLeftHeart className="aboutUs-icon" />
            <h3 className="fs-2 mb-3">Original Brands</h3>
            <span className="description-bottom">
              We bring the right people together to challenge established
              thinking and drive transform in 2020
            </span>
          </div>
        </div>
        <div className="aboutUs-container">
          <div className="aboutUs-container-index">
            <BsTrophy className="aboutUs-icon" />
            <h3 className="fs-2 mb-3">Global Awards</h3>
            <span className="description-bottom">
              Global Awards We bring the right people together to challenge
              established thinking and drive transform in 2020
            </span>
          </div>
        </div>
        <div className="aboutUs-container">
          <div className="aboutUs-container-index">
            <BsShieldShaded className="aboutUs-icon" />
            <h3 className="fs-2 mb-3">Secure Payment</h3>
            <span className="description-bottom">
              Global Awards We bring the right people together to challenge
              established thinking and drive transform in 2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
