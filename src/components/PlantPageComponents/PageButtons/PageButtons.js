import React from "react";

import PageButton from "./PageButton/PageButton";

import classes from "./PageButtons.module.css";

const PageButtons = ({ currentPageValue, onClick, PLANT_DATA }) => {
  const amountOfPages = Math.ceil(PLANT_DATA.length / 9);

  return (
    <div className={classes.buttons}>
      {currentPageValue > 1 && (
        <PageButton
          key={"lastPage"}
          item={{ id: "lastPage", value: "lastPage", displayedIcon: "←" }}
          onClick={onClick}
        />
      )}
      {Array.from({ length: amountOfPages }).map((_, index) => (
        <PageButton
          key={index}
          item={{
            id: index + 1,
            value: index + 1,
            displayedIcon: index + 1,
            shouldBlur: currentPageValue,
          }}
          onClick={onClick}
        />
      ))}
      {currentPageValue !== amountOfPages && (
        <PageButton
          key={"nextPage"}
          item={{ id: "nextPage", value: "nextPage", displayedIcon: "→" }}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default PageButtons;
