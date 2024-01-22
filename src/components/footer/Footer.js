import React, { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import Button from "../component_utils/button/Button";

import classes from "./footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    //something with email
    setSubscribed(true);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

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
        {!subscribed ? (
          <form onSubmit={submitHandler} className={classes.form}>
            <input
              id="newsLetter"
              name="newsLetter"
              value={email}
              onChange={handleChange}
              type="text"
              placeholder="Your email here..."
              className={classes.input}
              autoComplete="email"
            />
            <Button value="Subscribe" width="33%" />
          </form>
        ) : (
          <p className={classes.after_form}>
            Thanks for signing up for the newsletter! We'll be in touch soon.
          </p>
        )}
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
