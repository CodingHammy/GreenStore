import Link from "next/link";
import React from "react";
import classes from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>There was a problem.</h2>
      <p className={classes.paragraph}>
        We could not find the page you were looking for.
      </p>
      <Link href="/" className={classes.link}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
