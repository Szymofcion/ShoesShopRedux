const CartItems = (props) => {
  return (
    <>
      <li>
        {props.name} {props.amount}
      </li>
      <button onClick={props.onRemove}>-</button>
    </>
  );
};
export default CartItems;
