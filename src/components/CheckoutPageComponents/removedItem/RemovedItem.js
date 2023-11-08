import React from "react";
import Image from "next/image";

import classes from "./RemovedItem.module.css";

const RemovedItem = ({ deletedObject, handleUndo }) => {
  return (
    <div className={classes.undo}>
      <Image
        className={classes.tick}
        src={"/tick.svg"}
        width={20}
        height={20}
        alt={"delete item button"}
      />
      <p>"{deletedObject.name}" removed.</p>
      {
        <button onClick={handleUndo} className={classes.undo_button}>
          Undo?
        </button>
      }
    </div>
  );
};

export default RemovedItem;
