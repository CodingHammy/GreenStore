import React from "react";

import Button from "../button/Button";
import classes from "./CartTotal.module.css";

import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";

const CartTotal = () => {
  const grandTotal = useSelector(selectTotalPrice);

  return (
    <section className={classes.totalPrice}>
      <div className={classes.totalPrice_form}>
        <div className={classes.totalPrice_header_container}>
          <h3 className={classes.totalPrice_header_title}>Cart Totals</h3>
        </div>
        <div className={classes.totalPrice_content}>
          <div className={classes.totalPrice_amount}>
            Total Price <span>{grandTotal}</span>
          </div>
          <Button value="Buy Now" width="100%" height="60px" />
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
