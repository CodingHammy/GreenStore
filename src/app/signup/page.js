"use client";

import Address from "@/components/ViewCartComponents/Address/Address";

import classes from "./page.module.css";

import React from "react";

const page = () => {
  return (
    <section className={classes.container}>
      <Address />
    </section>
  );
};

export default page;
