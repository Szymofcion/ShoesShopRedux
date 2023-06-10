import Modal from "./Modal";

const Cart = () => {
  const cartItems = (
    <div>
      {[{ id: "1", name: "nike", amount: 1, price: 20 + "$" }].map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
  return (
    <Modal>
      <div className="cart__container">
        {cartItems}
        <div className="cart__container-total">
          <div>Total amount</div>
          <div>35.62</div>
        </div>
        <div className="cart__container-actions">
          <button className="button">Close</button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
