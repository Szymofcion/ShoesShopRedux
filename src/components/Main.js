import { useState } from "react";

import Nav from "./Nav";
import Banner from "../components/UI/Banner";
import PopularProductsSlick from "../components/UI/PopularProducts";
import Cart from "../components/UI/Cart";
import CartProvider from "../store/CartProvider";
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
      <CartProvider>
        <Nav showCartHandler={showCartHandler} />
        <Banner />
        <PopularProductsSlick />
        <Cart hideCartHandler={hideCartHandler} open={visibleModal} />
      </CartProvider>
      {/* <AboutUs/> */}
    </section>
  );
};
export default Main;
