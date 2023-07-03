import { useContext } from "react";

import { BsFillCartFill } from "react-icons/bs";
import CartContext from "../../store/cart-context";

import "./CartButton.scss";

const CartButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className="cart" onClick={showCartHandler}>
      <span className="cart-icon">
        <BsFillCartFill />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
      
    </button>
  );
};
export default CartButton;
