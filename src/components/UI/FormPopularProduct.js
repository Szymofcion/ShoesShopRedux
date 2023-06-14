import { useState } from "react";

const FormPopularProduct = ({ addToCartHandler }) => {
  const [amountShoes, setAmountShoes] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    setAmountShoes((prev) => prev + 1);
    addToCartHandler(amountShoes);
  };
  return (
    <form>
      <button
        onClick={submitHandler}
        type="button"
        className="btn-add-cart"
        id="amount"
        value={amountShoes}
      >
        Add To Cart
      </button>
    </form>
  );
};

export default FormPopularProduct;
