import React, { useState } from "react";

import Button from "@/components/component_utils/button/Button";

import { v4 as uuidv4 } from "uuid";
import classes from "./ReviewTab.module.css";
import ReviewTab_Comments from "./ReviewTab_Comments/ReviewTab_Comments";
import { usePathname } from "next/navigation";

import { useSelector } from "react-redux";
import { addComment } from "@/redux/features/reviewSlice";
import { useDispatch } from "react-redux";

import StarSetRating from "@/components/component_utils/plant/starRating/StarSetRating";

const ReviewTab = () => {
  const myUuid = uuidv4();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const plantId = parts[parts.length - 1];
  const plantsReviews = useSelector(
    (state) => state.review.plantsReviews[plantId]
  );

  const dispatch = useDispatch();
  const [curentRating, setCurrentRating] = useState(null);
  const [reviewFields, setReviewFields] = useState({
    id: "",
    review: "",
    name: "",
    email: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setReviewFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleRatingChange = (starRating) => {
    setCurrentRating(parseInt(starRating));
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();

    const { review, name, email } = reviewFields;
    if (
      review.trim() !== "" &&
      name.trim() !== "" &&
      email.trim() !== "" &&
      [1, 2, 3, 4, 5].includes(curentRating)
    ) {
      let uuid = myUuid;
      const commentData = {
        plantId: plantId,
        id: uuid,
        comment: review,
        name: name,
        email: email,
        rating: curentRating !== null ? curentRating : undefined,
      };
      dispatch(addComment(commentData));
      setReviewFields({
        id: "",
        review: "",
        name: "",
        email: "",
      });
      setCurrentRating(null);
    }
  };

  return (
    <section className={classes.reviewsContainer}>
      {!plantsReviews && (
        <p className={classes.noReviews}>There are no Reviews yet.</p>
      )}
      <section className={classes.reviews}>
        {plantsReviews &&
          plantsReviews.map((item) => (
            <ReviewTab_Comments
              key={item.id}
              name={item.name}
              comment={item.comment}
              rating={item.rating}
            />
          ))}
      </section>

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
              value={reviewFields.review}
              required
              onChange={handleFieldChange}
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
                value={reviewFields.name}
                onChange={handleFieldChange}
                required
                autoComplete="given-name"
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
                value={reviewFields.email}
                onChange={handleFieldChange}
                required
                autoComplete="email"
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
