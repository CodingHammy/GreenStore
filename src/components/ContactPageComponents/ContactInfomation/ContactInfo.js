import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <main className={classes.main}>
      <h2 className={classes.heading}>Get In Touch</h2>
      <div className={classes.text_container}>
        <p className={classes.paragraph}>
          Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam
          mollis ut montes, dui scelerisque ornare.
        </p>
        <div className={classes.optionsForContact}>
          <Image
            src={"/datumPoint.svg"}
            height={"20"}
            width={"20"}
            className={`${classes.datumPoint} ${classes.contactIcons}`}
            alt="a marker icon"
          />
          <div className={classes.optionsForContactText}>
            <h3 className={classes.contact_headings}>VISIT US</h3>
            <p className={classes.contact_addresses}>
              123 Oxford St, London, W1B 2AE
            </p>
          </div>
        </div>
        <div className={classes.optionsForContact}>
          <Image
            src={"/phone.svg"}
            height={"20"}
            width={"20"}
            className={`${classes.svgFlip} ${classes.contactIcons} ${classes.phoneIcon}`}
            alt="phone icon"
          />
          <div className={classes.optionsForContactText}>
            <h3 className={classes.contact_headings}>CALL US</h3>
            <p className={classes.contact_addresses}>+44 021-233-421</p>
          </div>
        </div>
        <div className={classes.optionsForContact}>
          <Image
            src={"/mail.svg"}
            height={"20"}
            width={"20"}
            className={`${classes.mailIcon} ${classes.contactIcons}`}
            alt="postal letter icon"
          />
          <div className={classes.optionsForContactText}>
            <h3 className={classes.contact_headings}>EMAIL US</h3>
            <p className={classes.contact_addresses}>mail@example.com</p>
          </div>
        </div>
      </div>
      <h3 className={classes.icon_header}>FOLLOW US</h3>
      <div className={classes.icon_links}>
        <Link href={"https://www.instagram.com/"}>
          <Image
            src="/instaBlack.svg"
            width={30}
            height={30}
            alt="Instagram icon"
          />
        </Link>
        <Link href={"https://www.pinterest.co.uk/"}>
          <Image
            src="/pinterest.svg"
            width={23}
            height={23}
            alt="Pinterest icon"
          />
        </Link>
        <Link href={"https://en-gb.facebook.com/"}>
          <Image
            src="/facebookBlack.svg"
            width={26}
            height={26}
            alt="Facebook icon"
          />
        </Link>
        <Link href={"https://www.youtube.com/"}>
          <Image src="/youtube.svg" width={28} height={28} alt="Youtube icon" />
        </Link>
      </div>
    </main>
  );
};

export default ContactInfo;
