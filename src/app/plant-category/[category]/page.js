"use client";
import React from "react";
import classes from "./page.module.css";

const PlantCategory = ({ params }) => {
  const paramasNameReplace = params.category.split("-").join(" ");

  return (
    <div>
      <div>{paramasNameReplace}</div>
    </div>
  );
};

export default PlantCategory;
