import Slider from "react-slick";
import shoes1 from "../assets/slick-shoes-1.png";
import shoes2 from "../assets/slick-shoes-2.png";
import shoes3 from "../assets/slick-shoes-3.png";
import shoes4 from "../assets/slick-shoes-4.png";
import shoes5 from "../assets/slick-shoes-5.png";
import { BsFillStarFill } from "react-icons/bs";

import "./PopularProducts.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DUMMY_SHOES = [
  {
    id: "1",
    rate: "4.9",
    name: "Nicke air",
    price: "$50",
    img: shoes1,
  },
  {
    id: "2",
    rate: "4.9",
    name: "Nicke air",
    price: "$50",
    img: shoes2,
  },
  {
    id: "3",
    rate: "4.9",
    name: "Nicke air",
    price: "$50",
    img: shoes3,
  },
  {
    id: "4",
    rate: "4.9",
    name: "Nicke air",
    price: "$50",
    img: shoes4,
  },
  {
    id: "5",
    rate: "4.9",
    name: "Nicke air",
    price: "$50",
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
        <p>{shoes.name}</p>
        <span>{shoes.price}</span>
        <button type="button" class="btn-add-cart">
          Add to Cart
        </button>
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
        <Slider {...settings}>
          {shoesList}

          {/* <div className="px-2">
            <div className="background-shoes">
              <img className="shoes-1" src={shoes1} alt="but"></img>
            </div>
            <div className="descriptions-shoes">
              <div>
                <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
              </div>
              <p>Nike Air 1</p>
              <span>$50</span>
              <button type="button" class="btn-add-cart">
                Add to Cart
              </button>
            </div>
          </div> */}

          {/* <div className="px-2">
            <div className="background-shoes">
              <img className="shoes-1" src={shoes2} alt="but"></img>
            </div>
            <div className="descriptions-shoes">
              <div>
                <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
              </div>
              <p>Nike Air 1</p>
              <p>
                $50
                <button type="button" class="btn-add-cart">
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
          <div className="px-2">
            <div className="background-shoes">
              <img className="shoes-1" src={shoes3} alt="but"></img>
            </div>
            <div className="descriptions-shoes">
              <div>
                <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
              </div>
              <p>Nike Air 1</p>
              <p>
                $50
                <button type="button" class="btn-add-cart">
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
          <div className="px-2">
            <div className="background-shoes">
              <img className="shoes-1" src={shoes4} alt="but"></img>
            </div>
            <div className="descriptions-shoes">
              <div>
                <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
              </div>
              <p>Nike Air 1</p>
              <p>
                $50
                <button type="button" class="btn-add-cart">
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
          <div className="px-2">
            <div className="background-shoes">
              <img className="shoes-1" src={shoes5} alt="but"></img>
            </div>
            <div className="descriptions-shoes">
              <div>
                <BsFillStarFill className="text-warning" /> <span>(4.5)</span>
              </div>
              <p>Nike Air 1</p>
              <p>
                $50
                <button type="button" class="btn-add-cart">
                  Add to Cart
                </button>
              </p>
            </div> */}
          {/* </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default PopularProductsSlick;
