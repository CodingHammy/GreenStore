import React from "react";

import Image from "next/image";

import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <div className={classes.undo}>
      <Image
        className={classes.tick}
        src={"/window.svg"}
        width={20}
        height={20}
        alt={"delete item button"}
      />
      <p>Your cart is currently empty.</p>
    </div>
  );
};

export default EmptyCart;
