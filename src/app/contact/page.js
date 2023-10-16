import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import Button from "@/components/button/Button";

const Contacts = () => {
  return (
    <main className={classes.something}>
      <section className={classes.text_container}>
        <div className={classes.text_left}>
          <div className={classes.contactSection}>
            <h2 className={classes.text_left_heading}>Get In Touch</h2>
            <p className={classes.text_left_paragraph}>
              Sit vulputate faucibus eget eget scelerisque faucibus malesuada
              nullam mollis ut montes, dui scelerisque ornare.
            </p>
            <div className={classes.optionsForContact}>
              <Image src={"/datumPoint.svg"} height={"20"} width={"20"} />
              <div className={classes.optionsForContactText}>
                <h3 className={classes.text_left_contact_headings}>VISIT US</h3>
                <p className={classes.text_left_contact_addresses}>
                  123 Oxford St, London, W1B 2AE
                </p>
              </div>
            </div>
            <div className={classes.optionsForContact}>
              <Image
                src={"/phone.svg"}
                height={"20"}
                width={"20"}
                className={classes.svgFlip}
              />
              <div className={classes.optionsForContactText}>
                <h3 className={classes.text_left_contact_headings}>CALL US</h3>
                <p className={classes.text_left_contact_addresses}>
                  +44 021-233-421
                </p>
              </div>
            </div>
            <div className={classes.optionsForContact}>
              <Image src={"/mail.svg"} height={"20"} width={"20"} />
              <div className={classes.optionsForContactText}>
                <h3 className={classes.text_left_contact_headings}>EMAIL US</h3>
                <p className={classes.text_left_contact_addresses}>
                  mail@example.com
                </p>
              </div>
            </div>
          </div>
          <h3>FOLLOW US</h3>
          <div className={classes.linksIcons}>
            <Link href={"https://www.instagram.com/"}>
              <Image src="/instaBlack.svg" width={30} height={30} />
            </Link>
            <Link href={"https://www.pinterest.co.uk/"}>
              <Image src="/pinterest.svg" width={23} height={23} />
            </Link>
            <Link href={"https://en-gb.facebook.com/"}>
              <Image src="/facebookBlack.svg" width={26} height={26} />
            </Link>
            <Link href={"https://www.youtube.com/"}>
              <Image src="/youtube.svg" width={28} height={28} />
            </Link>
          </div>
        </div>
        <div className={classes.text_right}>
          <h2 className={classes.text_right_heading}>Drop us a line or two</h2>
          <form action="submit">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="comment">Comment or Message</label>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
            ></textarea>
            <Button value="Submit" />
          </form>
        </div>
        <div className={classes.mapBox}></div>
      </section>
    </main>
  );
};

export default Contacts;
