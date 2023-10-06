import React from "react";

import Plant from "@/components/plant/Plant";

import classes from "./PlantButtonList.module.css";

const PlantButtonList = ({ firstItemOnPage, lastItemOnPage, PLANT_DATA }) => {
  return (
    <div className={classes.container}>
      {PLANT_DATA.slice(firstItemOnPage, lastItemOnPage).map((item) => (
        <Plant plant={item} />
      ))}
    </div>
  );
};

export default PlantButtonList;
