"use client";
import React, { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import classes from "./navbar.module.css";

import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/selectTotals";
import { selectTotalQuantity } from "@/redux/features/selectTotals";

const NavBar = ({ handleCheckoutModalTrue }) => {
  const grandTotal = useSelector(selectTotalPrice);
  const grandQuantity = useSelector(selectTotalQuantity);
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  const handleChangePage = () => {
    setMenuToggle(false);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.hamburger_buttons}>
          <button
            className={classes.hamburger_button}
            onClick={handleToggleMenu}
          >
            {menuToggle ? (
              <Image
                src="/cross_black.svg"
                alt="cross menu button"
                width={35}
                height={30}
              />
            ) : (
              <Image
                src="/hamburger.svg"
                alt="Hamburger menu button"
                width={35}
                height={32}
              />
            )}
          </button>
        </div>
        <Link href="/" className={classes.logo}>
          Greenstore
        </Link>
        <div className={classes.links}>
          <div className={classes.links_toggleDisplay}>
            <Link href="/">Home</Link>
            <Link href="/plants">Plants</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
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
      {menuToggle && (
        <nav className={classes.toggle_menu}>
          <Link onClick={handleChangePage} href="/">
            Home
          </Link>
          <Link onClick={handleChangePage} href="/plants">
            Plants
          </Link>
          <Link onClick={handleChangePage} href="/about">
            About
          </Link>
          <Link onClick={handleChangePage} href="/contact">
            Contact
          </Link>
        </nav>
      )}
    </Fragment>
  );
};

export default NavBar;
