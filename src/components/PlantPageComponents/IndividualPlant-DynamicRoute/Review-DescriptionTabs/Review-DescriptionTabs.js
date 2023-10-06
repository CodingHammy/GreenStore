import React from "react";

import DescriptionTab from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/Review-DescriptionTabs/DescriptionTab/DescriptionTab";
import ReviewTab from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/Review-DescriptionTabs/ReviewTab/ReviewTab";

import classes from "./Review-DescriptionTabs.module.css";

const ReviewAndDescriptionTabs = () => {
  const FAKE_DATA = 2;

  return (
    <section className={classes.decriptionsAndReviews}>
      <button className={classes.whichView}>Description</button>
      <button className={classes.whichView}>Reviews({FAKE_DATA})</button>
      <DescriptionTab />
      <ReviewTab />
    </section>
  );
};

export default ReviewAndDescriptionTabs;
