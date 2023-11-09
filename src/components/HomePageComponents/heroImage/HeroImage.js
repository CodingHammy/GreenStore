import React from "react";
import Image from "next/image";
import classes from "./HeroImage.module.css";

const HeroImage = ({ onClick }) => {
  const heroImage =
    "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  return (
    <section className={classes.hero}>
      <Image
        priority
        src={heroImage}
        fill
        sizes="100vw"
        object-fit="cover"
        quality={100}
        className={classes.heroImage}
        alt="hero image of Plant"
      />
      <div className={classes.overlayTextContainer}>
        <h2 className={classes.firstHeading}>WELCOME TO THE GREENSTORE</h2>
        <h2 className={classes.secondHeading}>
          Let’s Bring the Spring to <br /> Your Home
        </h2>
        <button className={classes.button} onClick={onClick}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroImage;
