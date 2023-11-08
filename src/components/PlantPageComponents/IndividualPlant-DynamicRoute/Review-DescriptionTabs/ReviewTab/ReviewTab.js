import React from "react";

import Button from "@/components/component_utils/button/Button";

import classes from "./ReviewTab.module.css";

const ReviewTab = () => {
  return (
    <section className={classes.reviewsContainer}>
      <p className={classes.noReviews}>There are no Reviews yet.</p>
      <div className={classes.formBorder}>
        <form action="" className={classes.gap}>
          <h2>Be the first to review “Alocasia Regal Shield”</h2>
          <p className={classes.lessBold}>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div>
            <p className={classes.yourRating}>
              Your rating * <span className={classes.rating}>★★★✰✰</span>
            </p>
          </div>
          <div
            className={`${classes.detailsInput} ${classes.detailsInputWide}`}
          >
            <label htmlFor="review">Your review *</label>
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="10"
              className={classes.inputTextArea}
            ></textarea>
          </div>
          <div className={classes.detailsContainer}>
            <div className={classes.detailsInput}>
              <label htmlFor="nameInput" id="name" className={classes.label}>
                Name *
              </label>
              <input
                type="text"
                id="nameInput"
                name="name"
                className={classes.input}
              />
            </div>
            <div className={classes.detailsInput}>
              <label htmlFor="emailInput" className={classes.label}>
                Email *
              </label>
              <input type="email" id="emailInput" className={classes.input} />
            </div>
          </div>
          <div className={classes.row}>
            <input type="checkbox" />
            <p className={classes.label}>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <Button value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ReviewTab;
