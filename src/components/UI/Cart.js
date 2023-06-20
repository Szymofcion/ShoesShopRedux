import { useContext } from "react";
import "./Cart.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

// const Backdrop = () => {
//   return <div className="backdrop"></div>;
// };

const Cart = ({ hideCartHandler, open }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Dialog
      open={open}
      onClose={hideCartHandler}
      aria-labelledby="responsive-dialog-title"
      className="dailog"
    >
      <DialogTitle id="responsive-dialog-title">Your Cart</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {cartCtx.items.map((item) => (
            <CartItems
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
            ></CartItems>
          ))}

          <h2>{totalAmount}</h2>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
export default Cart;
