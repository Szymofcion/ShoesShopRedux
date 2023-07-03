const CartItems = (props) => {
  return (
    <>
      <li>
        {props.name} {props.amount} {props.price}
      </li>
      <button onClick={props.cartItemRemoveHandler}>-</button>
      
    </>
  );
};
export default CartItems;
