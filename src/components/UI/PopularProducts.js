import { BsFillStarFill } from "react-icons/bs";
import { useContext } from "react";

import Slider from "react-slick";
import shoes1 from "../../assets/slick-shoes-1.png";
import shoes2 from "../../assets/slick-shoes-2.png";
import shoes3 from "../../assets/slick-shoes-3.png";
import shoes4 from "../../assets/slick-shoes-4.png";
import shoes5 from "../../assets/slick-shoes-5.png";
import FormPopularProduct from "./FormPopularProduct";
import CartContext from "../../store/cart-context";

import "./PopularProducts.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DUMMY_SHOES = [
  {
    id: "1",
    rate: "4.9",
    name: "Nicke air",
    price: 50,
    img: shoes1,
  },
  {
    id: "2",
    rate: "4.9",
    name: "Nicke air",
    price: 90,
    img: shoes2,
  },
  {
    id: "3",
    rate: "4.9",
    name: "Nicke air",
    price: 150,
    img: shoes3,
  },
  {
    id: "4",
    rate: "4.9",
    name: "Nicke air",
    price: 540,
    img: shoes4,
  },
  {
    id: "5",
    rate: "4.9",
    name: "Nicke air",
    price: 30,
    img: shoes5,
  },
];

const PopularProductsSlick = () => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: DUMMY_SHOES.id,
      name: DUMMY_SHOES.name,
      amount: amount,
      price: DUMMY_SHOES.price,
    });
    console.log(amount);
    
  };

  const shoesList = DUMMY_SHOES.map((shoes) => (
    <div key={shoes.id} id={shoes.id} className="px-2">
      <div className="background-shoes">
        <img className="shoes-1" src={shoes.img} alt="but"></img>
      </div>
      <div className="descriptions-shoes">
        <div>
          <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
        </div>
        <p>{shoes.name}</p>
        <span>{shoes.price}</span>
        <FormPopularProduct onAddToCart={addToCartHandler} />
      </div>
    </div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div>
        <h2>
          Popular <span className="text-danger">Products</span>
        </h2>
        <Slider {...settings}>{shoesList}</Slider>
      </div>
    </section>
  );
};

export default PopularProductsSlick;
