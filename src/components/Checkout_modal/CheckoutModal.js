"use client";
import React, { Fragment } from "react";
import classes from "./CheckoutModal.module.css";

import Image from "next/image";
import Button from "../component_utils/button/Button";
import ShoppingCart_items from "./ShoppingCart_items/ShoppingCart_items";

import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";
import { selectTotalQuantity } from "@/redux/features/selectTotals";

const CheckoutModal = ({ handleCheckoutModalfalse }) => {
  const grandTotal = useSelector(selectTotalPrice);
  const numberInCart = useSelector(selectTotalQuantity);
  const router = useRouter();

  const cartItems = useSelector((state) => state.cart.items);

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
          <Image
            src="/cross.svg"
            width={25}
            height={25}
            alt="delete all of item button"
          />
        </button>
      </div>
      <div className={classes.indent}>
        {numberInCart !== 0 ? (
          <Fragment>
            <div className={classes.ShoppingCart_items_area}>
              {cartItems.map((item) => (
                <ShoppingCart_items cartItem={item} key={item.id} />
              ))}
            </div>
            <div className={classes.price}>
              <h3 className={classes.price_title}>Subtotal:</h3>
              <h3 className={classes.price_amount}>{grandTotal}</h3>
            </div>
            <div className={classes.buttons}>
              <Button
                width={"100%"}
                value="View Cart"
                onClick={handleViewCheckout}
              />
              <Button width={"100%"} value="Checkout" />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className={classes.cartItemsEmpty}>
              <p>No products in the cart.</p>
            </div>
            <div className={`${classes.buttons} ${classes.bottomButton}`}>
              <Button
                width={"100%"}
                value="Continue Shopping"
                onClick={handleCheckoutModalfalse}
              />
            </div>
          </Fragment>
        )}
      </div>
    </main>
  );
};

export default CheckoutModal;
