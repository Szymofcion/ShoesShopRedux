import Modal from "./Modal";
import "./Cart.scss";

const Cart = () => {
  const cartItems = (
    <div>
      {[{ id: "1", name: "nike", amount: 1, price: 20 + "$" }].map((item) => (
        <div className="cart__container-info">
          {item.name} {item.amount} {item.price}
        </div>
      ))}
    </div>
  );
  return (
    <Modal >
      <div className="cart__container">
        <div className="cart__container-total">
          <h4>Your Shopping Cart</h4>
        </div>
        {cartItems}
        <div className="cart__container-actions">
          <p>Total: 20$</p>
          <button className="button" >Close</button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
