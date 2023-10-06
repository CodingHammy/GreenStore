import React from "react";
import classes from "./PageButton.module.css";

const PageButton = ({ item, onClick }) => {
  const activeButton = item.value === item.shouldBlur;

  const handleClick = () => {
    onClick(item.value);
  };

  return (
    <button
      className={
        activeButton ? `${classes.button} ${classes.blur}` : classes.button
      }
      key={item.id}
      onClick={handleClick}
      disabled={activeButton}
    >
      {item.displayedIcon}
    </button>
  );
};

export default PageButton;
