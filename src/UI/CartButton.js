import { BsFillCartFill } from "react-icons/bs";

import "./CartButton.scss";

const CartButton = () => {
  return (
    <button className="cart">
      <span className="cart-icon">
        <BsFillCartFill />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};
export default CartButton;
