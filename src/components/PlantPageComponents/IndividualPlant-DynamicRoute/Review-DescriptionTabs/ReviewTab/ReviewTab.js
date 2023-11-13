import React, { useState } from "react";

import Button from "@/components/component_utils/button/Button";

import Image from "next/image";

import classes from "./ReviewTab.module.css";

import StarSetRating from "@/components/component_utils/plant/starRating/StarSetRating";
import StarRatingView from "@/components/component_utils/plant/starRating/StarRatingView";

const ReviewTab = ({ data }) => {
  const [curentRating, setCurrentRating] = useState(null);
  const [reviewData, setReviewData] = useState(null);

  const handleRatingChange = (starRating) => {
    setCurrentRating(starRating);
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setReviewData({
      plantId: data,
      name: formData.get("name"),
      email: formData.get("email"),
      review: formData.get("review"),
      rating: curentRating,
    });
  };
  console.log(reviewData);

  return (
    <section className={classes.reviewsContainer}>
      <p className={classes.noReviews}>There are no Reviews yet.</p>

      <div className={classes.individualPlantRating}>
        <Image
          src={"/anonymous.svg"}
          width={65}
          height={65}
          alt="no Profile photo icon"
          className={classes.profileImage}
        />
        <div>
          <h2 className={classes.heading}>WIll</h2>
          <StarRatingView rating={2} />
          <p>I love It</p>
        </div>
      </div>

      <div className={classes.formBorder}>
        <form action="" className={classes.gap} onSubmit={HandleFormSubmit}>
          <h2>Be the first to review “Alocasia Regal Shield”</h2>
          <p className={classes.lessBold}>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className={classes.yourRating}>
            <span className={classes.space}>Your rating * </span>
            <StarSetRating onRatingChange={handleRatingChange} />
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
              <input
                type="email"
                id="emailInput"
                name="email"
                className={classes.input}
              />
            </div>
          </div>

          <Button value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default ReviewTab;
