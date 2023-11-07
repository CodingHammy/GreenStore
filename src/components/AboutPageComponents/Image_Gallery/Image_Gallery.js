import React from "react";
import Image from "next/image";

import classes from "./Image_Gallery.module.css";

const Image_Gallery = ({ galleryImages }) => {
  return (
    <div className={classes.container}>
      {galleryImages.map((item) => (
        <div className={classes.image_container}>
          <Image
            src={item.src}
            className={classes.image}
            fill
            sizes="20vw"
            object-fit="cover"
            alt={item.altTag}
          />
        </div>
      ))}
    </div>
  );
};

export default Image_Gallery;
