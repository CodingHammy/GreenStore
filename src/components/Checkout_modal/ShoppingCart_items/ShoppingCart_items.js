import React from "react";
import Image from "next/image";
import classes from "./ShoppingCart_items.module.css";

const ShoppingCart_items = ({ PLANT_DATA }) => {
  return (
    <main className={classes.container}>
      <div className={classes.left}>
        <Image
          style={{ objectFit: "cover" }}
          src={PLANT_DATA.src[0]}
          height={70}
          width={70}
          alt={`image of ${PLANT_DATA.title}`}
        />
        <div className={classes.col}>
          <h3 className={classes.title}>{PLANT_DATA.title}</h3>
          <p className={classes.price}>
            {PLANT_DATA.id} x {PLANT_DATA.price}
          </p>
        </div>
      </div>
      <button className={classes.button}>
        <Image
          className={classes.circle}
          src={"/cross.svg"}
          width={20}
          height={20}
          alt={"delete item button"}
        />
      </button>
    </main>
  );
};

export default ShoppingCart_items;
