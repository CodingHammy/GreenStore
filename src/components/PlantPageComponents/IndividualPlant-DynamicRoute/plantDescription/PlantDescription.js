import React, { useState } from "react";

import Link from "next/link";
import Image from "next/legacy/image";

import classes from "./PlantDescription.module.css";

import { addItem } from "@/redux/features/cartSlice";

import { useDispatch } from "react-redux";

import Button from "@/components/button/Button";

const PlantDescription = ({ data }) => {
  const dispatch = useDispatch();
  const [mainImageDisplay, setMainImageDisplay] = useState(0);
  const [plantAddNumber, setPlantAddNumber] = useState(1);

  const filteringPlantLinks = data.category.map((item, index) => {
    const hrefItem = item.split(" ").join("-");
    return (
      <Link href={`/plant-category/${hrefItem}`} key={index}>
        {item}
        {index !== data.category.length - 1 && ","}
      </Link>
    );
  });

  const handleInputChange_addToCart = (e) => {
    e.preventDefault();
    setPlantAddNumber(parseInt(e.target.value));
  };

  const handleSubmit_AddToCart = (e) => {
    if (!isNaN(plantAddNumber) && parseInt(e.target.value) > 0) {
      e.preventDefault();
      setPlantAddNumber(1);
      dispatch(
        addItem({
          name: data.title,
          amount: plantAddNumber,
          image: data.src[0],
          price: data.price,
        })
      );
      setPlantAddNumber(1);
    } else {
      console.error("please enter a valid number");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      handleSubmit_AddToCart(e); // Call the submit function when Enter is pressed
    }
  };

  const setImageClickHandler = (imgIndex) => {
    setMainImageDisplay(imgIndex);
  };

  return (
    <main className={classes.container}>
      <div className={classes.imageBoxLeft}>
        <div className={classes.mainImageBox}>
          <Image
            src={data.src[mainImageDisplay]}
            priority
            layout="fill"
            sizes="(max-width: 768px) 100vw"
            object-Fit="cover"
            alt={`Image of ${data.title} plant (enlarged)`}
            className={classes.largeImage}
          />
        </div>
        <div className={classes.switchImgButton}>
          <button
            className={classes.smallImageButton}
            onClick={() => setImageClickHandler(0)}
          >
            <Image
              src={data.src[0]}
              height={120}
              width={120}
              alt={`First Image of ${data.title} plant (small)`}
              className={classes.smallImage}
            />
          </button>
          <button
            className={classes.smallImageButton}
            onClick={() => setImageClickHandler(1)}
          >
            <Image
              src={data.src[1]}
              height={120}
              width={120}
              alt={`Second Image of ${data.title} plant (small)`}
              className={classes.smallImage}
            />
          </button>
        </div>
      </div>
      <div className={classes.displayMain}>
        <div className={classes.filterButton}>{filteringPlantLinks}</div>
        <h2 className={classes.itemNameTitle}>{data.title}</h2>
        <p>
          <span className={classes.priceTag}>{data.price}</span>
          {` + Free Shipping`}
        </p>
        <p className={classes.description}>
          Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
          molestie purus tristique sed tempor consequat risus tellus amet augue
          egestas mauris scelerisque donec ultrices.
          <br /> <br /> Sollicitudin facilisis massa pellentesque in ultrices
          enim nunc ac egestas elementum ut in ornare sit malesuada.
        </p>
        <div className={classes.addToCart}>
          <form action="" onSubmit={handleSubmit_AddToCart}>
            <input
              type="number"
              value={plantAddNumber}
              className={classes.addToCartInput}
              onChange={handleInputChange_addToCart}
              onKeyDown={handleKeyPress}
            />
            <Button
              value="Add To Cart"
              height="40px"
              width="250px"
              type="submit"
            />
          </form>
        </div>
        <p className={classes.filterButton}>
          <span className={classes.boldFilter}>Categories:</span>{" "}
          {filteringPlantLinks}
        </p>
      </div>
    </main>
  );
};

export default PlantDescription;
