"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/component_utils/button/Button";
import classes from "./page.module.css";
import { useSelector } from "react-redux";
import { signIn } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [signInForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const users = useSelector((state) => state.auth.users);
  const router = useRouter();

  const handleSignUpButtton = () => {
    router.push("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninForm({
      ...signInForm,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      signIn({ email: signInForm.email, password: signInForm.password })
    );
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
            onChange={handleChange}
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
            onChange={handleChange}
            className={classes.input}
            name="password"
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
          <Button onClick={handleLogin} value="Log in" />
        </div>
      </form>
    </section>
  );
};

export default page;
