import { useRef } from "react";

const FormPopularProduct = ({ addToCartHandler }) => {
  const amountButtonRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountButtonRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    addToCartHandler(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler}>
      <button
        ref={amountButtonRef}
        type="button"
        className="btn-add-cart"
        id="amount"
        defaultValue="1"
      >
        Add To Cart
      </button>
    </form>
  );
};

export default FormPopularProduct;
