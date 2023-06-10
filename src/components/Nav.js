import logo from "../assets/nike-logo.png";
import CartButton from "../UI/CartButton";
import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="navbar " data-bs-theme="dark">
      <form className="container-fluid justify-content-between d-flex justify-content-center mt-4 ">
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
          <CartButton />
          <button className="gradient ms-4 fs-5 " type="button">
            Contact Us
          </button>
        </div>
      </form>
    </nav>
  );
};
export default Nav;
