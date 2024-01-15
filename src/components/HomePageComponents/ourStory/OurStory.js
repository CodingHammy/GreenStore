import React from "react";

import Image from "next/image";

import classes from "./OurStory.module.css";

import Button from "@/components/component_utils/button/Button";

const OurStory = ({ onClick }) => {
  return (
    <section className={classes.story}>
      <div className={classes.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1550254469-e77c18c9252b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          layout="fill"
          sizes="50%"
          priority
          className={classes.imageLeftStory}
          alt="image of cheese plant"
        />
      </div>
      <div className={classes.blurbRight}>
        <h3 className={classes.blurbFirstTitle}>OUR STORY</h3>
        <h2 className={classes.blurbSecondTitle}>For People Who Love Plants</h2>
        <p className={classes.blurbText}>
          Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc
          at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed
          in placerat. Facilisis eu faucibus diam cursus pulvinar
          <br />
          <br />
          consectetur purus sem felis, mauris consectetur nisl vitae gravida
          ultricies sem condimentum aliquet ut sed gravida amet vitae euismod
          pulvinar volutpat laoreet pharetra.
        </p>
        <Button value="Read More" onClick={onClick} />
      </div>
    </section>
  );
};

export default OurStory;
