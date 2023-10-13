import React from "react";
import classes from "./Button.module.css";

const Button = ({ value, height, width, onClick }) => {
  const buttonStyle = {
    height: height || "50px",
    width: width || "120px",
  };

  return (
    <button onClick={onClick} className={classes.button} style={buttonStyle}>
      {value}
    </button>
  );
};

export default Button;
