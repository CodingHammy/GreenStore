"use client";
import React from "react";
import AllPlantsDisplay from "@/components/PlantPageComponents/AllPlantsDisplay";
import { DUMMY_DATA } from "@/utils/data";

export const PLANT_DATA = DUMMY_DATA;

const Plants = () => {
  return <AllPlantsDisplay PLANT_DATA={PLANT_DATA} />;
};

export default Plants;
