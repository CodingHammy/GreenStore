import React from "react";

import classes from "./Address.module.css";
import { Countries } from "@/utils/countries";

const Address = () => {
  return (
    <section className={classes.container}>
      <form action="" className={classes.form}>
        <h2 className={classes.heading}>Customer information</h2>
        <input
          className={classes.input}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address *"
          required
        />
        <h2 className={classes.heading}>Billing details</h2>
        <div className={classes.fitInForm}>
          <input
            className={classes.input}
            type="text"
            name="givenName"
            placeholder="Given Name *"
            required
          />
          <input
            className={classes.input}
            type="text"
            name="familyName"
            placeholder="Family Name *"
            required
          />
        </div>
        <select
          className={classes.input}
          name="country"
          id="country"
          placeholder="Country/Region *"
          required
        >
          {Countries.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <div className={classes.fitInForm}>
          <input
            className={classes.input}
            type="text"
            name="street"
            id="street"
            placeholder="Street address *"
          />
          <input
            className={classes.input}
            type="text"
            name="flat"
            id="flat"
            placeholder="Flat, apartment, etc"
          />
        </div>
        <div className={classes.fitInForm}>
          <input
            className={classes.input}
            type="text"
            name="city"
            id="city"
            placeholder="Town / City *"
            required
          />
          <input
            className={classes.input}
            type="text"
            name="county"
            placeholder="County"
            id="county"
          />
          <input
            className={classes.input}
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Postcode *"
            required
          />
        </div>
        <input
          className={classes.input}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone *"
          required
        />
      </form>
    </section>
  );
};

export default Address;
