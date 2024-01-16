"use client";
import React from "react";
import classes from "./page.module.css";

// mapbox

import Comment from "@/components/ContactPageComponents/Comment/Comment";
import ContactInfo from "@/components/ContactPageComponents/ContactInfomation/ContactInfo";
import Mapbox from "@/components/map_box/Mapbox";

const Contacts = () => {
  return (
    <main className={classes.something}>
      <section className={classes.text_container}>
        <ContactInfo />
        <div className={classes.line}></div>
        <Comment />
      </section>
      <div className={classes.mapbox_contianer}>
        <Mapbox />
      </div>
    </main>
  );
};

export default Contacts;
