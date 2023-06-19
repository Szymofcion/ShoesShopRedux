import { useState, useRef } from "react";
import { useContext } from "react";
import Input from "./Input";
import CartContext from "../../store/cart-context";
import "./FormPopularProduct.scss";
const FormPopularProduct = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    console.log(amount);

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    console.log(cartCtx);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCartHandler(enteredAmountNumber);
  };

  return (
    <form className="form-amount mt-2" onSubmit={submitHandler}>
      <Input
        label="Abount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="gradient p-2">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default FormPopularProduct;
