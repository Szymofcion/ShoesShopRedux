import "./Banner.scss";
import { BsFillStarFill } from "react-icons/bs";
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
          <button className="me-5 gradient text-light">Shop Now</button>
        </div>
        <div className="bottom-left-banner">
          <div>
            <span className="text-danger ">4.9 </span> <span> | </span>
            <span>
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
              <BsFillStarFill className="text-warning" />
            </span>
            <br />
            <span>200k Tital Review</span>
          </div>
        </div>
      </div>
      <div className="rigth-banner">
        <div className="shoes-banner"></div>
        <div className="container-special-offer">
          <div className="border-special-offer">
            <div className="blur"></div>
            <p className="fw-bold fs-4">Get up to 30% off</p>
            <p className="text-secondary">
              You can get up to 30 percent discount from here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
