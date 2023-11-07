import React from "react";
import classes from "./Button.module.css";

const Button = ({ value, height, width, onClick, type, form }) => {
  const buttonStyle = {
    height: height || "50px",
    width: width || "120px",
  };

  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={buttonStyle}
      type={type}
      form={form}
    >
      {value}
    </button>
  );
};

export default Button;
