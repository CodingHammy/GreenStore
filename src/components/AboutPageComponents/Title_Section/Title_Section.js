import React from "react";

import classes from "./Title_Section.module.css";

const Title_Section = () => {
  return (
    <div className={classes.title_section}>
      <h2 className={classes.title_left}>About</h2>
      <div className={classes.title_right}>
        <div className={classes.borderBottom}></div>
        <h3 className={classes.title_header}>
          We provide fresh and healthy plants for your space
        </h3>
        <p className={classes.title_paragraph}>
          Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris
          semper platea urna, sapien fermentum venenatis etiam enim ullamcorper
          phasellus tortor justo sapien faucibus in adipiscing risus adipiscing
          bibendum nec eget tincidunt sed.
        </p>
      </div>
    </div>
  );
};

export default Title_Section;
