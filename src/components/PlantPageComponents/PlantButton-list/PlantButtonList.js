import React from "react";

import Plant from "@/components/plant/Plant";

import classes from "./PlantButtonList.module.css";

const PlantButtonList = ({
  firstItemOnPage,
  lastItemOnPage,
  PLANT_DATA,
  params,
}) => {
  const desiredCategory = params;
  const filteredData = PLANT_DATA.filter((item) =>
    item.category.includes(desiredCategory)
  );

  const filteredPlants = () => {
    if (params !== undefined) {
      return filteredData
        .slice(firstItemOnPage, lastItemOnPage)
        .map((item) => <Plant plant={item} />);
    } else {
      return PLANT_DATA.slice(firstItemOnPage, lastItemOnPage).map((item) => (
        <Plant plant={item} />
      ));
    }
  };

  return (
    <div>
      <div className={classes.container}>{filteredPlants()}</div>
    </div>
  );
};

export default PlantButtonList;
