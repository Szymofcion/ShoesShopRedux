/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import logo from "../assets/nike-logo.png";
import CartButton from "./UI/CartButton";
import "./Nav.scss";
import Hamburger from "hamburger-react";
const Nav = ({ showCartHandler }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 804);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar${isScrolled ? " scrolled" : ""}`}
      data-bs-theme="dark"
    >
      <div className="container-fluid  ">
        <img className="logo" src={logo} alt="logo" />
        {isMobile ? (
          <button id="nav-icon1" className="menu-toggle" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        ) : (
          <div className={`nav-link-container${isMenuOpen ? " open" : ""}`}>
            <a href="#home" className="nav-link mx-3" onClick={toggleMenu}>
              Home
            </a>
            <a href="#popular" className="nav-link mx-3" onClick={toggleMenu}>
              Popular products
            </a>
            <a href="#aboutUs" className="nav-link mx-3" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="nav-link mx-3" onClick={toggleMenu}>
              Contact Us
            </a>
          </div>
        )}
        <div className="d-flex align-items-center">
          <CartButton showCartHandler={showCartHandler} />
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" className="nav-link" onClick={toggleMenu}>
            Home
          </a>
          <a href="#popularProduct" className="nav-link" onClick={toggleMenu}>
            Popular products
          </a>
          <a href="#aboutUs" className="nav-link" onClick={toggleMenu}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
