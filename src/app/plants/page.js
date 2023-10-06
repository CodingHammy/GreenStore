"use client";
import React, { useState } from "react";
import classes from "./page.module.css";

import { DUMMY_DATA } from "@/utils/data";
import PlantButtonList from "@/components/PlantPageComponents/PlantButton-list/PlantButtonList";
import PageButtons from "@/components/PlantPageComponents/PageButtons/PageButtons";

const Plants = () => {
  const PLANT_DATA = DUMMY_DATA;

  const [currentPageValue, setCurrentPageValue] = useState(1);

  const [firstItemOnPage, setFirstItemOnPage] = useState(0);
  const [lastItemOnPage, setLastItemOnPage] = useState(9);

  const [lowerNumberViewingItemsBetween, setLowerNumberViewingItemsBetween] =
    useState(1);
  const [higherNumberViewingItemsBetween, setHigherNumberViewingItemsBetween] =
    useState(9);

  const handleClickForChangeOfPageButtons = (value) => {
    setCurrentPageValue((prevCurrentPageValue) => {
      let page;
      if (!isNaN(value)) {
        page = value;
      } else if (value === "lastPage") {
        page = prevCurrentPageValue - 1;
      } else if (value === "nextPage") {
        page = prevCurrentPageValue + 1;
      }

      let lastItemOnCurrentPage = page * 9;
      let firstItemOnCurrentPage = lastItemOnCurrentPage - 9;

      let firstItemOnCurrentPagePlusOne = lastItemOnCurrentPage - 8;
      // ^ this is to show items between  etc 1-9 to account for arrays starting at 0

      setLowerNumberViewingItemsBetween(firstItemOnCurrentPagePlusOne);
      setFirstItemOnPage(firstItemOnCurrentPage);

      if (lastItemOnCurrentPage < PLANT_DATA.length) {
        setHigherNumberViewingItemsBetween(lastItemOnCurrentPage);
        setLastItemOnPage(lastItemOnCurrentPage);
      } else {
        setLastItemOnPage(PLANT_DATA.length);
        setHigherNumberViewingItemsBetween(PLANT_DATA.length);
      }
      scrollTo(0, 0);
      return page;
    });
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.headerText}>
            <p>Home / Shop</p>
            <p>
              Showing {lowerNumberViewingItemsBetween} -{" "}
              {higherNumberViewingItemsBetween} of {PLANT_DATA.length} results
            </p>
          </div>

          <select name="filter" id="filter" className={classes.filter}>
            <option value="by age" className={classes.options}>
              by age
            </option>
          </select>
          {/* still need to work on filter */}
        </div>
        <PlantButtonList
          firstItemOnPage={firstItemOnPage}
          lastItemOnPage={lastItemOnPage}
          PLANT_DATA={PLANT_DATA}
        />
        <PageButtons
          currentPageValue={currentPageValue}
          PLANT_DATA={PLANT_DATA}
          onClick={handleClickForChangeOfPageButtons}
        />
      </div>
    </main>
  );
};

export default Plants;
