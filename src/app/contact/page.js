import React from "react";
import classes from "./page.module.css";

import Comment from "@/components/ContactPageComponents/Comment/Comment";
import ContactInfo from "@/components/ContactPageComponents/ContactInfomation/ContactInfo";

const Contacts = () => {
  return (
    <main className={classes.something}>
      <section className={classes.text_container}>
        <ContactInfo />
        <Comment />
        <div className={classes.mapBox}></div>
      </section>
    </main>
  );
};

export default Contacts;
