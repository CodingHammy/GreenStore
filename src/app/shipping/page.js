import React from "react";

import classes from "./page.module.css";

import Image from "next/image";

import Address from "@/components/ViewCartComponents/Address/Address";
import ViewCart_AllItems from "@/components/ViewCartComponents/Address/ViewCart_displayCart/ViewCart_AllItems";

const page = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Address />
        <ViewCart_AllItems />
        <section className={classes.payment_container}>
          <h2>Payment</h2>
          <div className={classes.errorNoPaymentOption}>
            <Image
              src={"window.svg"}
              width={20}
              height={20}
              className={classes.windowIcon}
              alt="windowIcon"
            />
            <p className={classes.error_message}>
              Sorry, it seems that there are no available payment methods for
              your country. Please contact us if you require assistance or wish
              to make alternate arrangements.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default page;
