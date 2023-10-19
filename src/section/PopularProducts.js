import { BsFillStarFill } from "react-icons/bs";

import Slider from "react-slick";
import shoes1 from "../assets/slick-shoes-1.png";
import shoes2 from "../assets/slick-shoes-2.png";
import shoes3 from "../assets/slick-shoes-3.png";
import shoes4 from "../assets/slick-shoes-4.png";
import shoes5 from "../assets/slick-shoes-5.png";
import FormPopularProduct from "../components/UI/FormPopularProduct";

import "./PopularProducts.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DUMMY_SHOES = [
  {
    id: "1",
    rate: "4.1",
    name: "Nicke air",
    price: 50.99,
    img: shoes1,
  },
  {
    id: "2",
    rate: "4.5",
    name: "Nicke air",
    price: 90.99,
    img: shoes2,
  },
  {
    id: "3",
    rate: "4.4",
    name: "Nicke air",
    price: 150.99,
    img: shoes3,
  },
  {
    id: "4",
    rate: "4.8",
    name: "Nicke air",
    price: 540.99,
    img: shoes4,
  },
  {
    id: "5",
    rate: "4.7",
    name: "Nicke air",
    price: 30.99,
    img: shoes5,
  },
];

const PopularProductsSlick = () => {
  const shoesList = DUMMY_SHOES.map((shoes) => (
    <div key={shoes.id} className="px-2">
      <div className="background-shoes">
        <img className="shoes-1" src={shoes.img} alt="but"></img>
      </div>
      <div className="descriptions-shoes">
        <div>
          <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
        </div>
        <p className="m-0">{shoes.name}</p>
        <span>$ {shoes.price}</span>
        <FormPopularProduct
          id={shoes.id}
          key={shoes.id}
          name={shoes.name}
          price={shoes.price}
        />
      </div>
    </div>
  ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="popular">
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
