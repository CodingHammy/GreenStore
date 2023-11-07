import React from "react";
import { useEffect, useState } from "react";

import Plant from "@/components/plant/Plant";

import classes from "./RelatedProductsTab.module.css";

const RelatedProductsTab = ({ PLANT_DATA, params }) => {
  const [nextThreePlantsToDisplay, setNextThreePlantsToDisplay] = useState([
    0, 3,
  ]);
  let itemsLeftInPlantArray = PLANT_DATA.slice(params.id).length;

  useEffect(() => {
    const theSliceNumbers = () => {
      let index = parseInt(params.id);
      if (itemsLeftInPlantArray >= 3) {
        return [index + 3, 0];
      } else if (itemsLeftInPlantArray === 2) {
        return [index + 2, 1];
      } else if (itemsLeftInPlantArray === 1) {
        return [index + 1, 2];
      } else if (itemsLeftInPlantArray === 0) {
        return [0, 3];
      }
    };

    const result = theSliceNumbers();
    setNextThreePlantsToDisplay(result);
  }, [itemsLeftInPlantArray, params.id]);

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Related products</h2>
      <div className={classes.plantItems}>
        {PLANT_DATA.slice(params.id, nextThreePlantsToDisplay[0]).map(
          (item) => (
            <Plant plant={item} key={item.id} />
          )
        )}
        {PLANT_DATA.slice(0, nextThreePlantsToDisplay[1]).map((item) => (
          <Plant plant={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProductsTab;
