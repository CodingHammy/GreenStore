import React, { useEffect } from "react";

import Image from "next/image";

import classes from "./StarRatingView.module.css";

const StarRatingView = ({ rating }) => {
  const outOfFiveStarRating = rating;
  const starsLeftOutOfFive = 5 - outOfFiveStarRating;

  const fullStars = Array.from({ length: outOfFiveStarRating }, (_, index) => (
    <div key={index}>
      <Image
        src={"/fullStar.svg"}
        width={16}
        height={16}
        alt="full star icon"
      />
    </div>
  ));
  const emptyStars = Array.from({ length: starsLeftOutOfFive }, (_, index) => (
    <div key={index}>
      <Image
        src={"/emptyStar.svg"}
        width={16}
        height={16}
        alt="empty star icon"
      />
    </div>
  ));
  return (
    <div className={classes.rating}>
      {fullStars}
      {emptyStars}
    </div>
  );
};

export default StarRatingView;
