import React from "react";

import Button from "@/components/button/Button";

import classes from "./ReviewTab.module.css";

const ReviewTab = () => {
  return (
    <section className={classes.reviewsContainer}>
      <p>There are no Reviews yet.</p>
      <div className={classes.formBorder}>
        <h2>Be the first to review “Alocasia Regal Shield”</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form action="">
          <div>
            <p>Your Rating *</p>
            stars
          </div>
          <textarea name="review" id="review" cols="30" rows="10"></textarea>
          <input type="text" />
          <input type="checkbox" />
          Save my name, email, and website in this browser for the next time I
          comment.
          <Button value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ReviewTab;
