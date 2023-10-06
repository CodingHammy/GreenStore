import React from "react";
import Image from "next/legacy/image";

import classes from "./DescriptionTab.module.css";

const DescriptionTab = () => {
  return (
    <section className={classes.descriptionContainer}>
      <h2>Maecenas efficitur ornare massa.</h2>
      <h4>Duis auctor nisl vitae purus interdum, quis congue lacus rutrum.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis
        auctor, molestie lectus vitae, elementum orci. In et nunc consequat,
        semper tellus eget, euismod quam.
      </p>
      <div className={classes.descriptionImageContainer}>
        <Image
          src={
            "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80"
          }
          width={500}
          height={300}
        />
        <div className={classes.testInsideImageContainer}>
          <p>Nunc tempus</p>
          <h2>Duis vel ipsum vitae est semper varius.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
