import { BsFillCartFill } from "react-icons/bs";

import "./CartButton.scss";

const CartButton = ({onShow}) => {
  return (
    <button className="cart" onClick={onShow}>
      <span className="cart-icon">
        <BsFillCartFill />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};
export default CartButton;
