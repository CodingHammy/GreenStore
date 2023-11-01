"use client";
import React from "react";
import classes from "./CheckoutModal.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Button from "../button/Button";
import ShoppingCart_items from "./ShoppingCart_items/ShoppingCart_items";
import { PLANT_DATA } from "@/utils/format";

const CheckoutModal = ({ handleCheckoutModalfalse }) => {
  const router = useRouter();
  const FAKE_PRICE = Intl.NumberFormat("en-nz", {
    style: "currency",
    currency: "nzd",
  }).format(299.89);

  const handleViewCheckout = () => {
    handleCheckoutModalfalse();
    router.push("/checkout");
  };

  return (
    <main className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.title}>Shopping Cart</h2>
        <button
          className={classes.exitButton}
          onClick={handleCheckoutModalfalse}
        >
          <Image src="/cross.svg" width={25} height={25} />
        </button>
      </div>
      <div className={classes.indent}>
        <div className={classes.ShoppingCart_items_area}>
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[0]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[1]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[2]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[3]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[4]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[5]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[6]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[7]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[8]} />
          <ShoppingCart_items PLANT_DATA={PLANT_DATA[9]} />
        </div>
        <div className={classes.price}>
          <h3 className={classes.price_title}>Subtotal:</h3>
          <h3 className={classes.price_amount}>{FAKE_PRICE}</h3>
        </div>
        <div className={classes.buttons}>
          <Button
            width={"100%"}
            value="View Cart"
            onClick={handleViewCheckout}
          />
          <Button width={"100%"} value="Checkout" />
        </div>
      </div>
    </main>
  );
};

export default CheckoutModal;
