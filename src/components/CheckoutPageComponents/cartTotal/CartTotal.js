import React from "react";

import Button from "../../component_utils/button/Button";
import classes from "./CartTotal.module.css";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";

const CartTotal = () => {
  const router = useRouter();
  const grandTotal = useSelector(selectTotalPrice);

  const handleRedirectToCheckout = () => {
    router.push("/checkout");
  };

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
          <Button
            value="Buy Now"
            width="100%"
            height="60px"
            onClick={handleRedirectToCheckout}
          />
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
