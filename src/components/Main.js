import { useState } from "react";

import Nav from "./Nav";
import Banner from "./Banner";
import PopularProductsSlick from "./PopularProducts";
import Cart from "../UI/Cart";
// import AboutUs from './AboutUs'
import "./Main.scss";
const Main = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const showCartHandler = () => {
    setVisibleModal(true);
  };
  const hideCartHandler = () => {
    setVisibleModal(false);
  };

  return (
    <section className="wrapper">
      <Nav showCartHandler={showCartHandler} />
      <Banner />
      <PopularProductsSlick />
      <Cart hideCartHandler={hideCartHandler} open={visibleModal} />
      {/* <AboutUs/> */}
    </section>
  );
};
export default Main;
