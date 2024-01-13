"use client";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

import classes from "./navbar.module.css";

import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";
import { selectTotalQuantity } from "@/redux/features/selectTotals";

const NavBar = ({ handleCheckoutModalTrue }) => {
  const grandTotal = useSelector(selectTotalPrice);
  const grandQuantity = useSelector(selectTotalQuantity);
  return (
    <div className={classes.container}>
      <Link href="/" className={classes.logo}>
        Greenstore
      </Link>
      <div className={classes.links}>
        <Link href="/">Home</Link>
        <Link href="/plants">Plants</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button
          className={classes.checkout_button}
          onClick={handleCheckoutModalTrue}
        >
          <div className={classes.checkout}>
            <p className={classes.price}>{grandTotal}</p>
            <Image
              src="/checkout.svg"
              height={15}
              width={15}
              className={classes.icon}
              alt="checkout icon"
            />
            <p className={classes.amount}>{grandQuantity}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
