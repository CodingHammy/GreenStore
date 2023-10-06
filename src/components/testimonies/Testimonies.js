import React from "react";
import Testimony from "@/components/testimonies/testimony/Testimony";
import classes from "./Testimonies.module.css";

const DUMMY_DATA = [
  {
    name: "JUAN CARLOS",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    blurb:
      "labore sapiente libero reprehenderit tempore, pariatur molestias culpa error! Laudantium.",
  },
  {
    name: "ALICIA HEART",
    image:
      "https://images.unsplash.com/photo-1485290334039-a3c69043e517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    blurb:
      "labore sapiente libero reprehenderit tempore, pariatur molestias culpa error! Laudantium.",
  },
  {
    name: "JENNIFER LEWIS",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    blurb:
      "labore sapiente libero reprehenderit tempore, pariatur molestias culpa error! Laudantium.",
  },
];

const Testimonies = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>What Our Customers Say</h2>
      <div className={classes.borderBottom} />
      <div className={classes.Testimonies}>
        {DUMMY_DATA.map((item) => (
          <Testimony data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
