import React from "react";

import classes from "./ViewCart_item.module.css";

import Image from "next/image";

const ViewCart_item = ({ item }) => {
  const { name, amount, image, price, id } = item;

  const number = Number(price.replace(/[^0-9.-]+/g, ""));
  const newPrice = Intl.NumberFormat("en-nz", {
    style: "currency",
    currency: "nzd",
  }).format(number * amount);

  return (
    <section key={id} className={classes.container}>
      <div className={classes.content_containers}>
        <Image
          src={image}
          width={60}
          height={100}
          alt={`image of a ${name} plant`}
        />
        <p className={classes.itemName}>{name}</p>
      </div>
      <p className={classes.amount}>{`x${amount}`}</p>
      <p className={classes.subTotal}>{newPrice}</p>
    </section>
  );
};

export default ViewCart_item;
