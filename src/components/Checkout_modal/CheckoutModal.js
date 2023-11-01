import React from "react";
import classes from "./CheckoutModal.module.css";

import Image from "next/image";

import Button from "../button/Button";
import ShoppingCart_items from "./ShoppingCart_items/ShoppingCart_items";

const CheckoutModal = () => {
  const FAKE_PRICE = Intl.NumberFormat("en-nz", {
    style: "currency",
    currency: "nzd",
  }).format(299.89);

  return (
    <main>
      <div>
        <h2 className={classes.title}>Shopping Cart</h2>
        <Image src="#" width={5} height={5} />
      </div>
      <div>
        <ShoppingCart_items />
      </div>
      <div className={classes.price}>
        <h3 className={classes.price_title}>Subtotal:</h3>
        <h3 className={classes.price_amount}>{FAKE_PRICE}</h3>
      </div>
      <div className={classes.buttons}>
        <Button value="View Cart" />
        <Button value="Checkout" />
      </div>
    </main>
  );
};

export default CheckoutModal;
