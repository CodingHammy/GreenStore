import React from "react";
import Image from "next/legacy/image";

import classes from "./DescriptionTab.module.css";

const DescriptionTab = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Maecenas efficitur ornare massa.</h2>
      <h4 className={classes.subTitle}>
        Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.
      </h4>
      <p className={classes.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
        auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
        semper tellus eget, euismod quam.
      </p>
      <div className={classes.imgContainer}>
        <Image
          src={
            "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80"
          }
          objectFit="cover"
          layout="fill"
          className={classes.heroImage}
        />
        <div className={classes.textInsideImage}>
          <p className={classes.textInsideImage_title}>Nunc tempus</p>
          <h2 className={classes.textInsideImage_subTitle}>
            Duis vel ipsum vitae est semper varius.
          </h2>
          <p className={classes.textInsideImage_paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <h2>Sad Plant Signs</h2>
        <ul>
          <li>Duis vel ipsum vitae est semper varius in id</li>
          <li>Class aptent taciti sociosqu</li>
          <li>Litora torquent per conubia nostra per</li>
          <li>Inceptos himenaeos praesent</li>
          <li>Fermentum elit eget</li>
        </ul>
      </div>
    </section>
  );
};

export default DescriptionTab;
