import React from "react";
import "./Input.scss";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input__container p-2">
      <input className="input__container-none" ref={ref} type="text" {...props.input} />
    </div>
  );
});

export default Input;
