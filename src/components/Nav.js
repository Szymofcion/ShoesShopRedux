/* eslint-disable jsx-a11y/anchor-is-valid */

import logo from "../assets/nike-logo.png";
import CartButton from "./UI/CartButton";
import "./Nav.scss";
const Nav = ({ showCartHandler }) => {
  return (
    <nav className="navbar" data-bs-theme="dark">
      <div className="container-fluid justify-content-between d-flex justify-content-center mt-4 ">
        <img className="logo " src={logo} alt="logo"></img>
        <div className="nav-link-container">
          <a href="#home" className="nav-link mx-3 fs-5 ">
            Home
          </a>
          <a href="#popularProducts" className="nav-link mx-3 fs-5 ">
            Popular products
          </a>
          <a href="#aboutUs" className="nav-link mx-3 fs-5  ">
            About
          </a>
          <a href="#contactUs" className="nav-link mx-3 fs-5  ">
            Contact Us
          </a>
        </div>
        <div className="d-flex align-items-center">
          <CartButton showCartHandler={showCartHandler} />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
