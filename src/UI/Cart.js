import "./Cart.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// const Backdrop = () => {
//   return <div className="backdrop"></div>;
// };

const Cart = ({ hideCartHandler, open }) => {
  const cartItems = (
    <div>
      {[{ id: "1", name: "nike", amount: 1, price: 20 + "$" }].map((item) => (
        <div key={item.id} className="cart__container-info">
          <span>{item.name}</span> <span>{item.amount}</span>
          <span>{item.price}</span>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <Dialog
        open={open}
        onClose={hideCartHandler}
        aria-labelledby="responsive-dialog-title"
        className="dailog"
      >
        <DialogTitle id="responsive-dialog-title">Your Cart</DialogTitle>
        <DialogContent>
          <DialogContentText>{cartItems}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={hideCartHandler}>Close</button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Cart;
