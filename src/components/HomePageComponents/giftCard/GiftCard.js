"use client";
import React from "react";

import Image from "next/legacy/image";
import classes from "./GiftCard.module.css";
const GiftCard = ({ onClick }) => {
  return (
    <div className={classes.container}>
      <Image
        priority
        src="https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/footer-background.jpg"
        layout="fill"
        objectFit="cover"
        className={classes.image}
        quality={100}
        alt="image of many plants in pots"
      />
      <div className={classes.blurb}>
        <h3 className={classes.firstHeader}>GIFT CARD</h3>
        <h2 className={classes.secondHeader}>Give the Gift of Greenery</h2>
        <p className={classes.paragraph}>
          Pretium tortor risus enim neque quis pellentesque maecenas proin odio
          eget arcu
        </p>
        <button className={classes.button} onClick={onClick}>
          Purchase A Gift Card
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
