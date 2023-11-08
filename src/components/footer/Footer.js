import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../component_utils/button/Button";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.linksWrap}>
        <div className={classes.links}>
          <Link href="#">Home</Link>
          <Link href="/plants">Plants</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={classes.subscribe}>
        <h2 className={classes.header}>Subscribe to our newsletter</h2>
        <form className={classes.form}>
          <input
            id="newsLetter"
            type="text"
            placeholder="Your email here..."
            className={classes.input}
          />
          <Button value="Subscribe" />
        </form>
        <div className={classes.social}>
          <Link href="/">
            <Image
              src="/insta.svg"
              height={30}
              width={30}
              className={classes.image}
              alt="instagrams logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/facebook.svg"
              height={30}
              width={30}
              className={classes.image}
              alt="Facebooks logo"
            />
          </Link>
          <Link href="/">
            <Image
              src="/twitter.svg"
              height={30}
              width={30}
              className={classes.image}
              alt="Twitters logo"
            />
          </Link>
        </div>
      </div>
      <div className={classes.certifiedBox}>
        <div className={classes.certifiedText}>
          <p>© 2023 Plant Shop. Powered by Plant Shop.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
