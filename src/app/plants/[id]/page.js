"use client";

import classes from "./page.module.css";
import PlantDescription from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/plantDescription/PlantDescription";
import ReviewAndDescriptionTabs from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/Review-DescriptionTabs/Review-DescriptionTabs";
import RelatedProductsTab from "@/components/PlantPageComponents/IndividualPlant-DynamicRoute/RelatedProductsTab/RelatedProductsTab";

import { PLANT_DATA } from "@/utils/format";

const PlantPage = ({ params }) => {
  const paramsMinusOne = params.id - 1;
  const data = PLANT_DATA[paramsMinusOne]; // look at again i don't think it is a good idea to have the data saved to the id because you add more with random id then this won't work

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <PlantDescription data={data} />
        <ReviewAndDescriptionTabs />
        <RelatedProductsTab PLANT_DATA={PLANT_DATA} params={params} />
      </div>
    </div>
  );
};

export default PlantPage;
