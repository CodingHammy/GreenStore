import React from "react";
import Image from "next/legacy/image";
import classes from "./FrontPageTokens.module.css";

const FrontPageTokens = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div>
          <Image
            src="/lock.svg"
            height={55}
            width={55}
            alt="secure payment icon"
            className={classes.image}
          />
        </div>
        <div className={classes.blurb}>
          <h6 className={classes.heading}>SECURE PAYMENT</h6>
          <p className={classes.paragraph}>Est at totam sunt qui, commodi.</p>
        </div>
      </div>
      <div className={classes.item}>
        <div>
          <Image
            src="/package.svg"
            height={55}
            width={55}
            alt="icon of a box"
            className={classes.image}
          />
        </div>
        <div className={classes.blurb}>
          <h6 className={classes.heading}>DELIVERED WITH CARE</h6>
          <p className={classes.paragraph}>
            Adipisicing iste nostrum rem ad elit.
          </p>
        </div>
      </div>
      <div className={classes.item}>
        <div>
          <Image
            src="/care.svg"
            height={55}
            width={55}
            alt="handled with care icon"
            className={classes.image}
          />
        </div>
        <div className={classes.blurb}>
          <h6 className={classes.heading}>EXCELLENT SERVICE</h6>
          <p className={classes.paragraph}>
            Molestias fugiat distinctio quam alias quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontPageTokens;
