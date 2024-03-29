import React, { useState } from "react";

import DescriptionTab from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/Review-DescriptionTabs/DescriptionTab/DescriptionTab";
import ReviewTab from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/Review-DescriptionTabs/ReviewTab/ReviewTab";

import classes from "./Review-DescriptionTabs.module.css";

const ACTIVE = {
  DescriptionTab: "descriptionTab",
  ReviewTab: "reviewTab",
};

const ReviewAndDescriptionTabs = ({ data, totalReviews }) => {
  const [activeTab, setActiveTab] = useState(ACTIVE.DescriptionTab);

  const handleSetActiveTab = (tabActivated) => {
    setActiveTab(tabActivated);
  };

  return (
    <section className={classes.container}>
      <div className={classes.buttons}>
        <button
          className={`${classes.tabButton} ${
            activeTab === ACTIVE.DescriptionTab && classes.borderTop
          }`}
          onClick={() => handleSetActiveTab(ACTIVE.DescriptionTab)}
        >
          Description
        </button>
        <button
          className={`${classes.tabButton} ${
            activeTab === ACTIVE.ReviewTab && classes.borderTop
          }`}
          onClick={() => handleSetActiveTab(ACTIVE.ReviewTab)}
        >
          Reviews{" "}
          <span className={classes.extraLetterSpacing}>({totalReviews})</span>
        </button>
      </div>
      {activeTab === ACTIVE.DescriptionTab && <DescriptionTab />}
      {activeTab === ACTIVE.ReviewTab && <ReviewTab data={data} />}
    </section>
  );
};

export default ReviewAndDescriptionTabs;
