/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import logo from "../assets/nike-logo.png";
import CartButton from "./UI/CartButton";
import "./Nav.scss";

const Nav = ({ showCartHandler }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
      setIsMenuOpen(false); // Zamknij menu po zmianie szerokości ekranu
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Inicjalizacja stanu na początku
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
      <div className="container-fluid justify-content-between d-flex justify-content-center mt-4">
        <img className="logo" src={logo} alt="logo" />
        {isMobile ? (
          <button id="nav-icon1" className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        ) : (
          <div className={`nav-link-container${isMenuOpen ? " open" : ""}`}>
            <a href="/" className="nav-link mx-3" onClick={toggleMenu}>
              Home
            </a>
            <a href="/popular" className="nav-link mx-3" onClick={toggleMenu}>
              Popular products
            </a>
            <a href="/about" className="nav-link mx-3" onClick={toggleMenu}>
              About
            </a>
            <a href="/contact" className="nav-link mx-3" onClick={toggleMenu}>
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
          <a href="/" className="nav-link" onClick={toggleMenu}>
            Home
          </a>
          <a href="/popular" className="nav-link" onClick={toggleMenu}>
            Popular products
          </a>
          <a href="/about" className="nav-link" onClick={toggleMenu}>
            About
          </a>
          <a href="/contact" className="nav-link" onClick={toggleMenu}>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
