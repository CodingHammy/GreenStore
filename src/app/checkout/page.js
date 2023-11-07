"use client";
import React, { useRef, useEffect, useState } from "react";

import classes from "./page.module.css";

import CartTotal from "@/components/CheckoutPageComponents/CartTotal";
import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";
import Button from "@/components/button/Button";

import { useSelector, useDispatch } from "react-redux";

import { updateCart, deleteAllItem } from "@/redux/features/cartSlice";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const formRefs = {};
  const dispatch = useDispatch();
  const [amountInputValues, setAmountInputValues] = useState(
    cartItems.map((item) => item.amount)
  );

  cartItems.forEach((item) => {
    formRefs[item.name] = useRef(null);
  });

  const handleInfo = (e) => {
    e.preventDefault();
    Object.keys(formRefs).forEach((itemName) => {
      const inputValue = formRefs[itemName].current.value;
      dispatch(updateCart({ name: itemName, amount: inputValue }));
    });
  };

  const handleInputChange = (index, value) => {
    const newAmountValues = [...amountInputValues];
    newAmountValues[index] = value;
    setAmountInputValues(newAmountValues);
  };

  const handleDeleteItem = (itemName) => {
    delete formRefs[itemName];

    dispatch(deleteAllItem({ name: itemName }));
  };

  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3 className={classes.mainTitle}>Cart</h3>
        <div className={classes.form}>
          <div className={classes.titles}>
            <h6 className={classes.catergory_title_empty}>{null}</h6>
            <h6 className={classes.catergory_title_productName}>
              Product name
            </h6>
            <h6 className={classes.catergory_title}>Price</h6>
            <h6 className={classes.catergory_title}>Quantity</h6>
            <h6 className={classes.catergory_title}>Sub Total</h6>
          </div>
          <form action="/submit-form" onSubmit={handleInfo}>
            {cartItems.map((item, index) => (
              <CheckoutPage_items
                key={index}
                cartItems={item}
                formRef={formRefs[item.name]}
                handleDeleteItem={() => handleDeleteItem(item.name)}
                amountInputValue={amountInputValues[index]}
                setAmountInputValue={(value) => handleInputChange(index, value)}
              />
            ))}
            <div className={classes.updateCart_container}>
              <Button value="Update Cart" height="45px" width="160px" />
            </div>
          </form>
        </div>
        <CartTotal />
      </section>
    </main>
  );
};

export default page;
