import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

import classes from "./navbar.module.css";

const NavBar = () => {
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
        <Link href="/checkout">
          <div className={classes.checkout}>
            <p className={classes.price}>$0.00</p>
            <Image
              src="/checkout.svg"
              height={15}
              width={15}
              className={classes.icon}
              alt="checkout icon"
            />
            <p className={classes.amount}>2</p>
          </div>
        </Link>
        <Link href="#">
          <Image
            src="/profile.svg"
            width={24}
            height={24}
            className={classes.profile}
            alt="icon depicting a human"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
