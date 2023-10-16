import React from "react";

import Button from "@/components/button/Button";

import classes from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Drop us a line or two</h2>
      <form action="submit">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className={classes.input} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className={classes.input} />
        <label htmlFor="comment">Comment or Message</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          className={classes.comment_box}
        ></textarea>
        <Button value="Submit" />
      </form>
    </div>
  );
};

export default Comment;
