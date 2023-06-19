import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input-amount p-2">
      <label htmlFor={props.input.id}></label>
      <input ref={ref} type="text" {...props.input} />
    </div>
  );
});

export default Input;
