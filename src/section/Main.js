import { useState } from "react";

import Nav from "../components/Nav";
import Banner from "../components/UI/Banner";
import PopularProducts from "./PopularProducts";
import Cart from "../components/UI/Cart";
import CartProvider from "../store/CartProvider";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

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
    <CartProvider>
      <Nav showCartHandler={showCartHandler} />
      <div id="home" className="wrapper">
        <Banner />
        <PopularProducts />
        <Cart
          hideCartHandler={hideCartHandler}
          open={visibleModal}
          close={setVisibleModal}
        />
        <AboutUs />
        <ContactForm />
        <Footer />
      </div>
    </CartProvider>
  );
};
export default Main;
