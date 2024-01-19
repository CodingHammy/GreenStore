import React from "react";
import classes from "./page.module.css";
import Title_Section from "@/components/AboutPageComponents/Title_Section/Title_Section";
import Story_Section from "@/components/AboutPageComponents/Story_Section/Story_Section";
import Image_Gallery from "@/components/AboutPageComponents/Image_Gallery/Image_Gallery";

const galleryImages = [
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-6.jpg",
    altTag: "",
  },
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-1.jpg",
    altTag: "",
  },
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-2.jpg",
    altTag: "",
  },
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-3.jpg",
    altTag: "",
  },
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-4.jpg",
    altTag: "",
  },
  {
    src: "https://websitedemos.net/plant-shop-02/wp-content/uploads/sites/931/2021/08/plants-store-gallery-img-5.jpg",
    altTag: "",
  },
];

const About = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Title_Section />
        <div className={classes.fake}></div>
        <Story_Section />
        <Image_Gallery galleryImages={galleryImages} />
      </div>
    </section>
  );
};

export default About;
