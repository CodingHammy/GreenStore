"use client";
import React from "react";

import classes from "./page.module.css";

import { PLANT_DATA } from "@/app/plants/page";
import AllPlantsDisplay from "@/components/PlantPageComponents/AllPlantsDisplay";

const PlantCategory = ({ params }) => {
  const paramasNameReplace = params.category.split("-").join(" ");

  return (
    <div>
      <AllPlantsDisplay params={paramasNameReplace} PLANT_DATA={PLANT_DATA} />
    </div>
  );
};

export default PlantCategory;
