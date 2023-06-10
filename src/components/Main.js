import Nav from "./Nav";
import Banner from "./Banner";
import PopularProductsSlick from "./PopularProducts";

import "./Main.scss";

const Main = () => {
  return (
    <section className="wrapper">
      <Nav />
      <Banner />
      <PopularProductsSlick />
    </section>
  );
};
export default Main;
