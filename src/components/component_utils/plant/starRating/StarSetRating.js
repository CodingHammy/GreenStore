import React, { useState } from "react";

import classes from "./StarSetRating.module.css";

import Image from "next/image";

const StarSetRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleClick = (e) => {
    const newRating = e.target.value;

    setRating(newRating);
    onRatingChange(newRating);
  };

  const handleHover = (ratingValue) => {
    setHover(ratingValue);
  };
  const handleNoHover = () => {
    setHover(null);
  };
  return (
    <div className={classes.rating}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label
            htmlFor={`rating-${ratingValue}`}
            name="rating"
            className={classes.star}
            key={ratingValue}
          >
            <input
              type="radio"
              id={`rating-${ratingValue}`}
              name="rating"
              className={classes.radioButton}
              value={ratingValue}
              onClick={handleClick}
            />
            <div
              onMouseOver={() => handleHover(ratingValue)}
              onMouseOut={handleNoHover}
            >
              {(hover || rating) > i ? (
                <Image
                  src={"/fullStar.svg"}
                  width={20}
                  height={20}
                  className="star"
                  alt="full star"
                />
              ) : (
                <Image
                  src={"/emptyStar.svg"}
                  width={20}
                  height={20}
                  alt="empty star"
                  className="star"
                />
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default StarSetRating;
