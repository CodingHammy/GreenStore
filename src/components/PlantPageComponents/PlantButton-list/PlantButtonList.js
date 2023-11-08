import React from "react";

import Plant from "@/components/component_utils/plant/Plant";

import classes from "./PlantButtonList.module.css";

const PlantButtonList = ({ firstItemOnPage, lastItemOnPage, filteredData }) => {
  return (
    <div>
      <div className={classes.container}>
        {filteredData.slice(firstItemOnPage, lastItemOnPage).map((item) => (
          <Plant plant={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PlantButtonList;
