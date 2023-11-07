"use client";
import React, { useState } from "react";
import classes from "./AllPlantsDisplay.module.css";

import PlantButtonList from "@/components/PlantPageComponents/PlantButton-list/PlantButtonList";
import PageButtons from "@/components/PlantPageComponents/PageButtons/PageButtons";

const AllPlantsDisplay = ({ PLANT_DATA, params }) => {
  let filteredData;
  if (params !== undefined) {
    const desiredCategory = params;
    filteredData = PLANT_DATA.filter((item) =>
      item.category.includes(desiredCategory)
    );
  } else {
    filteredData = PLANT_DATA;
  }

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

      if (lastItemOnCurrentPage < filteredData.length) {
        setHigherNumberViewingItemsBetween(lastItemOnCurrentPage);
        setLastItemOnPage(lastItemOnCurrentPage);
      } else {
        setLastItemOnPage(filteredData.length);
        setHigherNumberViewingItemsBetween(filteredData.length);
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
            {params !== undefined && (
              <div className={classes.divForFilteredCatergory}>
                <h2 className={classes.headerForFiltedCategory}>{params}</h2>
                <p className={classes.paragraphForFilteredCatergory}>
                  Quisque nulla egestas integer mauris, vestibulum mattis fames
                  lobortis sed sollicitudin suscipit lobortis magna suspendisse
                  fames
                </p>
              </div>
            )}
            <div className={classes.clientPageAndFilter}>
              <p className={classes.showingPage}>
                {filteredData.length > 9
                  ? `Showing ${lowerNumberViewingItemsBetween} - ${higherNumberViewingItemsBetween} of ${filteredData.length} results`
                  : `Showing all ${filteredData.length} results`}
              </p>

              {/* <select name="filter" id="filter" className={classes.filter}>
                <option value="by age" className={classes.options}>
                  by age
                </option>
              </select> */}
              {/* still need to work on filter */}
            </div>
          </div>
        </div>
        <PlantButtonList
          firstItemOnPage={firstItemOnPage}
          lastItemOnPage={lastItemOnPage}
          filteredData={filteredData}
          params={params}
        />
        {filteredData.length > 9 && (
          <PageButtons
            currentPageValue={currentPageValue}
            filteredData={filteredData}
            onClick={handleClickForChangeOfPageButtons}
          />
        )}
      </div>
    </main>
  );
};

export default AllPlantsDisplay;
