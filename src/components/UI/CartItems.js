import "./CartItems.scss";
const CartItems = (props) => {
  return (
    <div className="cart__container">
      <ul>
        <li className="cart__container-list">
          {props.name} {props.amount} {props.price}
          <button
            className="cart__container-btn"
            onClick={props.cartItemRemoveHandler}
          >
            -
          </button>
        </li>
      </ul>
    </div>
  );
};
export default CartItems;
