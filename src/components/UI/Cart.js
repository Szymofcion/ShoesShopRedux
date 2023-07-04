import { useContext } from "react";
import "./Cart.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

// const Backdrop = () => {
//   return <div className="backdrop"></div>;
// };

const Cart = ({ hideCartHandler, open, close }) => {
  const handleClose = () => {
    close(false);
  };
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
      className="dailog "
    >
      <DialogTitle className="dialog-background" id="responsive-dialog-title">
        Your Cart
      </DialogTitle>
      <DialogContent className="dialog-background">
        <DialogContentText>
          {cartCtx.items.map((item) => (
            <CartItems
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
              onClose={hideCartHandler}
            ></CartItems>
          ))}

          <h2>{totalAmount}</h2>
        </DialogContentText>
      </DialogContent>
      <DialogActions className="dialog-background">
        <button  className="dialog-btn">
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </button>
      </DialogActions>
    </Dialog>
  );
};
export default Cart;
