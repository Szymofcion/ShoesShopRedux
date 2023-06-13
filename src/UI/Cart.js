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
          {item.name} {item.amount} {item.price}
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
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
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
