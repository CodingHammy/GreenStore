import React from "react";
import classes from "./page.module.css";

const Contacts = () => {
  return (
    <main className={classes.something}>
      <section className={classes.text_container}>
        <div className={classes.text_left}>
          <h2 className={classes.text_left_heading}>Get In Touch</h2>
          <p className={classes.text_left_paragraph}>
            Sit vulputate faucibus eget eget scelerisque faucibus malesuada
            nullam mollis ut montes, dui scelerisque ornare.
          </p>
          <div>
            <div>
              <h3 className={classes.text_left_contact_headings}>VISIT US</h3>
              <p className={classes.text_left_contact_addresses}>
                123 Oxford St, London, W1B 2AE
              </p>
            </div>
            <div>
              <h3 className={classes.text_left_contact_headings}>CALL US</h3>
              <p className={classes.text_left_contact_addresses}>
                +44 021-233-421
              </p>
            </div>
            <div>
              <h3 className={classes.text_left_contact_headings}>EMAIL US</h3>
              <p className={classes.text_left_contact_addresses}>
                mail@example.com
              </p>
            </div>
          </div>
          <h3>FOLLOW US</h3>
          <div></div>
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
          </form>
        </div>
        <div className={classes.mapBox}></div>
      </section>
    </main>
  );
};

export default Contacts;
