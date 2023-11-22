"use client";
import React from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/component_utils/button/Button";
import classes from "./page.module.css";

const page = () => {
  const router = useRouter();

  const handleSignUpButtton = () => {
    router.push("/signup");
  };

  return (
    <section className={classes.container}>
      <h2 className={classes.heading}>Log In</h2>
      <form action="" className={classes.form}>
        <div className={classes.input_container}>
          <label className={classes.label} htmlFor="email">
            Email Address
          </label>
          <input
            className={classes.input}
            type="text"
            name="email"
            id="email"
            placeholder="Email Address *"
            required
          />
        </div>
        <div className={classes.input_container}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            id="password"
            placeholder="Password *"
            required
          />
        </div>
        <div className={classes.buttons}>
          <Button
            onClick={handleSignUpButtton}
            backgroundColor="gray"
            value="Sign Up"
            type="button"
          />
          <Button
            // onClick={}
            value="Log in"
          />
        </div>
      </form>
    </section>
  );
};

export default page;
