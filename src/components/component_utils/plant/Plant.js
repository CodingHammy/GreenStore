"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/features/cartSlice";

import classes from "./Plant.module.css";
import StarRatingView from "./starRating/StarRatingView";
import { selectRatingsForPlant } from "@/redux/features/reviewSlice";
import { useSelector } from "react-redux";

const Plant = ({ plant }) => {
  const dispatch = useDispatch();
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);
  const [adviceIsShown, setAdviceIsShown] = useState(false);

  const ratingsForPlant = useSelector((state) =>
    selectRatingsForPlant(state, plant.id)
  );

  const displayEnterHandler = () => {
    setCheckoutIsShown(true);
  };
  const displayExitHandler = () => {
    setCheckoutIsShown(false);
  };

  const adviceEnterHandler = () => {
    setAdviceIsShown(true);
  };
  const adviceExitHandler = () => {
    setAdviceIsShown(false);
  };

  const handleAddItem = () => {
    dispatch(
      addItem({
        name: plant.title,
        amount: 1,
        image: plant.src[0],
        price: plant.price,
        id: plant.id,
      })
    );
  };

  return (
    <div
      className={classes.container}
      onMouseLeave={displayExitHandler}
      onMouseEnter={displayEnterHandler}
    >
      <Link href={`/plants/${plant.id}`} className={classes.linkPlantPage}>
        <div className={classes.imagePlant}>
          <Image
            fill
            src={plant.src[0]}
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            // height={580}
            // width={386}
            alt={`image of ${plant.title}`}
          />
        </div>
      </Link>
      <StarRatingView rating={ratingsForPlant} />
      <Link href={plant.src} className={classes.title}>
        {plant.title}
      </Link>
      <p className={classes.category}>{plant.category[0]}</p>
      <p className={classes.price}>{plant.price}</p>

      {checkoutIsShown && (
        <button
          onMouseEnter={adviceEnterHandler}
          onMouseLeave={adviceExitHandler}
          className={classes.addToCart}
          onClick={handleAddItem}
        >
          <Image
            src="/checkout.svg"
            priority
            height={20}
            width={20}
            className={classes.addToCartImage}
            alt="add to cart icon"
          />
        </button>
      )}
      {adviceIsShown && <p className={classes.checkoutAdvice}>Add To Cart</p>}
    </div>
  );
};

export default Plant;
