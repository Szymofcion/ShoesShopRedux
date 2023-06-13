import logo from "../assets/nike-logo.png";
import CartButton from "../UI/CartButton";
import "./Nav.scss";
const Nav = ({showCartHandler}) => {
  return (
    <nav className="navbar " data-bs-theme="dark">
      <div className="container-fluid justify-content-between d-flex justify-content-center mt-4 ">
        <img className="logo " src={logo} alt="logo"></img>
        <div>
          <button className="btn mx-3 fs-5 " type="button">
            Home
          </button>
          <button className="btn mx-3 fs-5 " type="button">
            Popular products
          </button>
          <button className="btn mx-3 fs-5  " type="button">
            About
          </button>
        </div>
        <div className="d-flex align-items-center">
          <CartButton showCartHandler={showCartHandler} />
          <button className="gradient ms-4 fs-5 " type="button">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
