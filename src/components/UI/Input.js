import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}></label>
      <input ref={ref} type="text" {...props.input} />
    </div>
  );
});

export default Input;
