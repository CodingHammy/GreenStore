import React from "react";
import { useEffect, useState } from "react";

import Plant from "@/components/plant/Plant";

import classes from "./RelatedProductsTab.module.css";

const RelatedProductsTab = ({ PLANT_DATA, params }) => {
  const [resultFromEffect, setResultFromEffect] = useState([0, 3]);
  let objectsLeftInArray = PLANT_DATA.slice(params.id).length;

  useEffect(() => {
    const theSliceNumbers = () => {
      let index = parseInt(params.id);
      if (objectsLeftInArray >= 3) {
        return [index + 3, 0];
      } else if (objectsLeftInArray === 2) {
        return [index + 2, 1];
      } else if (objectsLeftInArray === 1) {
        return [index + 1, 2];
      } else if (objectsLeftInArray === 0) {
        return [0, 3];
      }
    };

    const result = theSliceNumbers();
    setResultFromEffect(result);
  }, [objectsLeftInArray, params.id]);

  return (
    <section className={classes.morePlantFilterContainer}>
      <h2>Related products</h2>
      <div className={classes.nextPlant}>
        {PLANT_DATA.slice(params.id, resultFromEffect[0]).map((item) => (
          <Plant plant={item} />
        ))}
        {PLANT_DATA.slice(0, resultFromEffect[1]).map((item) => (
          <Plant plant={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProductsTab;
