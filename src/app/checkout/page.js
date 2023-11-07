"use client";
import React, { useState } from "react";

import Image from "next/image";

import classes from "./page.module.css";

import CartTotal from "@/components/CheckoutPageComponents/CartTotal";
import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";

import { useSelector, useDispatch } from "react-redux";

import { deleteAllItem, addItem } from "@/redux/features/cartSlice";

import { selectTotalQuantity } from "@/redux/features/selectTotals";

const page = () => {
  const cartHasItemsNumber = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const [deletedObject, setDeletedObject] = useState({});
  const [showUndo, setShowUndo] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteItem = (item) => {
    setShowUndo(true);
    setDeletedObject({
      name: item.name,
      amount: item.amount,
      image: item.image,
      price: item.price,
    });
    dispatch(deleteAllItem({ name: item.name }));
  };

  const handleUndo = () => {
    dispatch(addItem(deletedObject));
    setShowUndo(false);
  };

  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3 className={classes.mainTitle}>Cart</h3>
        {showUndo && (
          <div className={classes.undo}>
            <Image
              className={classes.tick}
              src={"/tick.svg"}
              width={20}
              height={20}
              alt={"delete item button"}
            />
            <p>"{deletedObject.name}" removed.</p>
            {
              <button onClick={handleUndo} className={classes.undo_button}>
                Undo?
              </button>
            }
          </div>
        )}
        {cartHasItemsNumber === 0 ? (
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
        ) : (
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
            {cartItems.map((item, index) => (
              <CheckoutPage_items
                key={index}
                cartItems={item}
                handleDeleteItem={() =>
                  handleDeleteItem({
                    name: item.name,
                    amount: item.amount,
                    image: item.image,
                    price: item.price,
                  })
                }
              />
            ))}
          </div>
        )}
        {cartHasItemsNumber !== 0 && <CartTotal />}
      </section>
    </main>
  );
};

export default page;
