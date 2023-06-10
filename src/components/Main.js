import Nav from "./Nav";
import Banner from "./Banner";
import PopularProductsSlick from "./PopularProducts";
import Cart from "../UI/Cart";
// import AboutUs from './AboutUs'
import "./Main.scss";
const Main = () => {
  return (
    <section className="wrapper">
      <Nav />
      <Banner />
      <PopularProductsSlick />
      <Cart/>
	  {/* <AboutUs/> */}
    </section>
  );
};
export default Main;
