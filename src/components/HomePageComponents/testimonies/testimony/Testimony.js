import React from "react";
import Image from "next/legacy/image";
import classes from "./Testimony.module.css";

const Testimony = ({ data }) => {
  return (
    <div className={classes.container}>
      <Image
        src="/qoute.svg"
        width={40}
        height={40}
        alt="icon of openning speech marks"
      />
      <p className={classes.blurb}>{data.blurb} </p>
      <Image
        src={data.image}
        width={40}
        height={40}
        className={classes.image}
        alt={`image of ${data.name}`}
      />
      <p>{data.name}</p>
    </div>
  );
};

export default Testimony;
