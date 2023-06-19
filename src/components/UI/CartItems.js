import { useContext } from "react";

import CartContext from "../../store/cart-context";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <>
      {props.name}
    
    </>
  );
};
export default CartItems;
