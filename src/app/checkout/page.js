"use client";
import React, { useState } from "react";

import classes from "./page.module.css";

import CartTotal from "@/components/CheckoutPageComponents/cartTotal/CartTotal";
import CheckoutPage_items from "@/components/CheckoutPageComponents/checkoutPage_items/CheckoutPage_items";

import { useSelector, useDispatch } from "react-redux";

import { deleteAllItem, addItem } from "@/redux/features/cartSlice";

import { selectTotalQuantity } from "@/redux/features/selectTotals";
import EmptyCart from "@/components/CheckoutPageComponents/emptyCart/EmptyCart";
import RemovedItem from "@/components/CheckoutPageComponents/removedItem/RemovedItem";

const page = () => {
  const cartHasItemsNumber = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const [deletedObject, setDeletedObject] = useState({});
  const [showUndo, setShowUndo] = useState(false);
  const dispatch = useDispatch();

  const prepareItemForDeletion = (item, handleDeleteItem) => {
    const { name, amount, image, price } = item;
    handleDeleteItem({ name, amount, image, price });
  };

  const handleDeleteItem = (item) => {
    setShowUndo(true);
    setDeletedObject({
      name: item.name,
      amount: item.amount,
      image: item.image,
      price: item.price,
      id: item.id,
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
          <RemovedItem deletedObject={deletedObject} handleUndo={handleUndo} />
        )}
        {cartHasItemsNumber === 0 ? (
          <EmptyCart />
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
                  prepareItemForDeletion(item, handleDeleteItem)
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
