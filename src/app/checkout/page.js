import React from "react";

import classes from "./page.module.css";

import CheckoutPage_items from "@/components/CheckoutPageComponents/CheckoutPage_items";
import { PLANT_DATA } from "@/utils/format";

const page = () => {
  return (
    <main className={classes.wrapper}>
      <section className={classes.container}>
        <h3>cart</h3>
        <tabel>
          <tr>
            <th>{null}</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
          <tr>
            <CheckoutPage_items PLANT_DATA={PLANT_DATA[0]} />
          </tr>
          <tr>
            <CheckoutPage_items PLANT_DATA={PLANT_DATA[5]} />
          </tr>
          <tr>
            <CheckoutPage_items PLANT_DATA={PLANT_DATA[19]} />
          </tr>
        </tabel>
      </section>
      ;
    </main>
  );
};

export default page;
