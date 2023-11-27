import React from "react";

import Image from "next/image";
import StarRatingView from "@/components/component_utils/plant/starRating/StarRatingView";

import classes from "./ReviewTab_Comments.module.css";

const ReviewTab_Comments = ({ name, rating, comment }) => {
  return (
    <div className={classes.individualPlantRating}>
      <Image
        src={"/anonymous.svg"}
        width={65}
        height={65}
        alt="no Profile photo icon"
        className={classes.profileImage}
      />
      <div>
        <h2 className={classes.heading}>{name}</h2>
        <StarRatingView rating={rating} />
        <p className={classes.ratingComment}>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewTab_Comments;
