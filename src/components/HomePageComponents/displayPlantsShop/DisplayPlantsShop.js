import React from "react";

import Button from "@/components/component_utils/button/Button";
import Plant from "@/components/component_utils/plant/Plant";

import classes from "./DisplayPlantsShop.module.css";

const DisplayPlantsShop = ({ onClick, PLANT_DATA }) => {
  return (
    <section className={classes.shop}>
      <div className={classes.shopHead}>
        <h3 className={classes.shopHeader}>New Plants</h3>
        <Button value="Shop Now" onClick={onClick} />
      </div>
      <div className={classes.items}>
        {PLANT_DATA.slice(0, 6).map((item) => {
          return <Plant plant={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default DisplayPlantsShop;
