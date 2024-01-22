import React, { useState } from "react";

import Button from "@/components/component_utils/button/Button";

import classes from "./Comment.module.css";

const Comment = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    //something with formData
    setMessageSent(true);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Drop us a line or two</h2>
      {!messageSent ? (
        <form action="submit" onSubmit={SubmitHandler}>
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            className={classes.input}
            autoComplete="given-name"
            required
          />
          <label className={classes.label} htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            className={classes.input}
            autoComplete="email"
            required
          />
          <label className={classes.label} htmlFor="comment">
            Comment or Message
          </label>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={handleInputChange}
            value={formData.comment}
            className={classes.comment_box}
            required
          ></textarea>
          <Button value="Submit" />
        </form>
      ) : (
        <p>Thanks for contacting us! We will be in touch with you shortly.</p>
      )}
    </div>
  );
};

export default Comment;
