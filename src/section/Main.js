import { useState } from "react";

import Nav from "../components/Nav";
import Banner from "../components/UI/Banner";
import PopularProducts from "./PopularProducts";
import Cart from "../components/UI/Cart";
import CartProvider from "../store/CartProvider";
import AboutUs from "./AboutUs";
import "./Main.scss";
import ContactForm from "./ContactForm";
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
        <PopularProducts />
        <Cart
          hideCartHandler={hideCartHandler}
          open={visibleModal}
          close={setVisibleModal}
        />
      </CartProvider>
      <AboutUs />
      <ContactForm />
    </section>
  );
};
export default Main;
