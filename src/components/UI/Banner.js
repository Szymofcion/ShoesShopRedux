/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Banner.scss";
import { BsFillStarFill } from "react-icons/bs";
import BannerImg from "../../assets/pngegg.png";
const Banner = () => {
  return (
    <section className="banner-container d-flex justify-content-center">
      <div className="left-banner d-flex justify-content-center align-items-start flex-column">
        <h2 className="title-banner">
          Summer
          <br /> Collections <br />
          <span className="text-banner text-danger">2022</span>
        </h2>
        <p className="descriptions-banner">
          It will be your one and only great shoe.It will be your one and only
          great shoe. It will be your one and only great shoe
        </p>
        <div>
          <a href="#" className="me-5 btn-banner text-light">
            Shop Now
          </a>
        </div>
        <div className="bottom-left-banner">
          <div className="opinion-container-rwd">
            <span className="text-danger  ">4.9 </span> <span> | </span>
            <span>
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
            </span>
            <br />
            <span className="total-rwd">200k Tital Review</span>
          </div>
        </div>
      </div>
      <div className="rigth-banner">
        <img src={BannerImg} alt="banner-img" className="shoes-banner"></img>
        <div className="container-special-offer">
          <div className="border-special-offer">
            <div className="blur"></div>
            <p className="rwd-special-offer fw-bold">Get up to 30% off</p>
            <p className="rwd-special-offer-description text-secondary">
              You can get up to 30 percent discount from here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
