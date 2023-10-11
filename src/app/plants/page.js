"use client";
import React from "react";
import AllPlantsDisplay from "@/components/PlantPageComponents/AllPlantsDisplay";

import { PLANT_DATA } from "@/utils/format";

const Plants = () => {
  return <AllPlantsDisplay PLANT_DATA={PLANT_DATA} />;
};

export default Plants;
