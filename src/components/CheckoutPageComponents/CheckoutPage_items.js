"use client";
import React, { Fragment } from "react";
import Image from "next/image";

import classes from "./CheckoutPage_items.module.css";

const CheckoutPage_items = ({
  cartItems,
  formRef,
  handleDeleteItem,
  amountInputValue,
  setAmountInputValue,
}) => {
  const number = Number(cartItems.price.replace(/[^0-9.-]+/g, ""));
  // const [amountInputValue, setAmountInputValue] = useState(0); // Initial value will be replaced with the amount of plants that had been added to cart

  // useEffect(() => {
  //   setAmountInputValue(cartItems.amount);
  // }, []);

  const handleInputChange = (event) => {
    event.preventDefault();
    setAmountInputValue(event.target.value);
  };
  //used to update the value and save info

  const onDeleteItemClick = () => {
    handleDeleteItem(cartItems.name); // Pass both name and formRef to the parent
  };

  return (
    <Fragment>
      <div className={classes.titles}>
        <div className={classes.catergory_title_quarter}>
          <button className={classes.button} onClick={onDeleteItemClick}>
            <Image
              className={classes.circle}
              src={"/cross.svg"}
              width={20}
              height={20}
              alt={"delete item button"}
            />
          </button>
        </div>
        <div className={classes.catergory_title_threeQuarter}>
          <Image
            src={cartItems.image}
            style={{ objectFit: "contain" }}
            height={100}
            width={100}
            alt={`image of ${cartItems.title}`}
          />
        </div>
        <h6 className={classes.catergory_title_productName}>
          {cartItems.name}
        </h6>
        <h6 className={classes.catergory_title}>{cartItems.price}</h6>
        <div className={classes.catergory_title}>
          <input
            type="number"
            ref={formRef}
            id={cartItems.name}
            value={amountInputValue}
            onChange={handleInputChange}
            className={classes.input}
          />
        </div>
        <h6 className={classes.catergory_title}>
          {Intl.NumberFormat("en-nz", {
            style: "currency",
            currency: "nzd",
          }).format(amountInputValue * number)}
        </h6>
      </div>
    </Fragment>
  );
};

export default CheckoutPage_items;
