/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";

import "./Footer.scss";
const Footer = () => {
  let data;
  const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    data = year;
  };
  handleCurrentYear();
  return (
    <footer className="footer" id="contactUs">
      <div className="wrapper">
        <div className="footer__boxes">
          <div className="footer__box">
            <h3 className="footer__box-title">Here you can find us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias dolore odio ex consequatur optio earum.
            </p>
            <div className="footer__box-social">
              <a
                target="_blank"
                className="footer__box-link"
                href="https://github.com/Szymofcion"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                target="_blank"
                className="footer__box-link"
                href="https://github.com/Szymofcion"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
              <a
                target="_blank"
                className="footer__box-link"
                href="https://github.com/Szymofcion"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
          <p className="number-text">
            <BsFillTelephoneFill /> +48 643 453 344
          </p>
          <hr />
          <p className="bottom-text">{data} Shoes Shop Slenium</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
