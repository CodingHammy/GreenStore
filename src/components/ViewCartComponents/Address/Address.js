"use client";
import React, { Fragment, useState } from "react";

import { usePathname } from "next/navigation";
import classes from "./Address.module.css";
import { Countries } from "@/utils/countries";

import Button from "@/components/component_utils/button/Button";

const Address = () => {
  const pathname = usePathname();
  const isSignUpPage = pathname === "/signup";

  const [formdata, setFormData] = useState({
    email: "",
    confirmEmail: "",
    givenName: "",
    familyName: "",
    country: "",
    street: "",
    flat: "",
    city: "",
    county: "",
    postcode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isSignUpPage) {
      if (formdata.email !== formdata.confirmEmail) {
        alert("EMAIL DON'T MATCH");
        return;
      }
    }

    console.log("form Submitted", formdata);
  };

  return (
    <section className={classes.container}>
      <form action="" onSubmit={handleSignUp} className={classes.form}>
        <h2 className={classes.heading}>Customer information</h2>
        <div className={`${isSignUpPage ? classes.customerInfo : ""}`}>
          {isSignUpPage && (
            <label className={classes.signUpLabels} htmlFor="email">
              Email Address
            </label>
          )}
          <input
            onChange={handleChange}
            className={`${classes.input} ${classes.isSignUpPage}`}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address *"
            required
          />
          {isSignUpPage && (
            <Fragment>
              <input
                onChange={handleChange}
                className={`${classes.input} ${classes.isSignUpPage}`}
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                placeholder="Confirm Email Address *"
                required
              />
              <label className={classes.signUpLabels} htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                className={`${classes.input} ${classes.isSignUpPage}`}
                type="password"
                name="password"
                id="password"
                placeholder="Password *"
                required
              />
              <input
                onChange={handleChange}
                className={`${classes.input} ${classes.isSignUpPage}`}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password *"
                required
              />
            </Fragment>
          )}
        </div>
        <h2 className={classes.heading}>Billing details</h2>
        <div className={classes.fitInForm}>
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="givenName"
            placeholder="Given Name *"
            required
          />
          <input
            onChange={handleChange}
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
          onChange={handleChange}
          required
        >
          <option className={classes.options} value=""></option>
          {Countries.map((item) => (
            <option className={classes.options} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className={classes.fitInForm}>
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="street"
            id="street"
            placeholder="Street address *"
          />
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="flat"
            id="flat"
            placeholder="Flat, apartment, etc"
          />
        </div>
        <div className={classes.fitInForm}>
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="city"
            id="city"
            placeholder="Town / City *"
            required
          />
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="county"
            placeholder="County"
            id="county"
          />
          <input
            onChange={handleChange}
            className={classes.input}
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Postcode *"
            required
          />
        </div>
        <input
          onChange={handleChange}
          className={classes.input}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone *"
          required
        />
        <div className={classes.buttonContainer}>
          <Button value="Sign up" />
        </div>
      </form>
    </section>
  );
};

export default Address;
