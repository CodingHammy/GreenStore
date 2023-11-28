import React, { useState } from "react";

import Button from "@/components/component_utils/button/Button";

import classes from "./ReviewTab.module.css";
import ReviewTab_Comments from "./ReviewTab_Comments/ReviewTab_Comments";
import { usePathname } from "next/navigation";

import { useSelector } from "react-redux";
import { addComment } from "@/redux/features/reviewSlice";
import { useDispatch } from "react-redux";

import StarSetRating from "@/components/component_utils/plant/starRating/StarSetRating";

const ReviewTab = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const plantId = parts[parts.length - 1];
  const plantsReviews = useSelector(
    (state) => state.review.plantsReviews[plantId]
  );

  const dispatch = useDispatch();
  const [curentRating, setCurrentRating] = useState(null);

  const handleRatingChange = (starRating) => {
    setCurrentRating(starRating);
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    dispatch(
      addComment({
        plantId: plantId,
        rating: curentRating,
        comment: formData.get("review"),
        name: formData.get("name"),
        email: formData.get("email"),
      })
    );
  };
  console.log(plantsReviews);

  return (
    <section className={classes.reviewsContainer}>
      {!plantsReviews && (
        <p className={classes.noReviews}>There are no Reviews yet.</p>
      )}
      {/* <section className={classes.reviews}>
        {plantsReviews &&
          plantsReviews.map((item) => (
            <ReviewTab_Comments
              name={item[1].name}
              comment={item[1].comment}
              rating={item[1].rating}
            />
          ))}
      </section> */}

      <div className={classes.formBorder}>
        <form action="" className={classes.gap} onSubmit={HandleFormSubmit}>
          {!plantsReviews && (
            <h2>Be the first to review “Alocasia Regal Shield”</h2>
          )}
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
              required
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
                required
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
                required
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
