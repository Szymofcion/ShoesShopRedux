import { BsFillCartFill } from "react-icons/bs";

import "./CartButton.scss";

const CartButton = ({showCartHandler}) => {
  return (
    <button className="cart" onClick={showCartHandler}>
      <span className="cart-icon">
        <BsFillCartFill />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};
export default CartButton;
