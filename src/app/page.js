"use client";
import Image from "next/legacy/image";

import Plant from "@/components/plant/Plant";
import classes from "./page.module.css";

import Testimonies from "@/components/testimonies/Testimonies";
import Button from "@/components/button/Button";

import { DUMMY_DATA } from "@/utils/data";
import GiftCard from "@/components/giftCard/GiftCard";
import FrontPageTokens from "@/components/frontPageToken/FrontPageTokens";

const heroImage =
  "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
export default function Home() {
  return (
    <main className={classes.main}>
      <section className={classes.hero}>
        <Image
          priority
          src={heroImage}
          layout="fill"
          object-Fit="cover"
          quality={100}
          className={classes.heroImage}
          alt="hero image of Plant"
        />
        <div className={classes.overlayText}>
          <h2 className={classes.headingOne}>WELCOME TO THE GREENSTORE</h2>
          <h2 className={classes.headingTwo}>
            Let’s Bring the Spring to <br /> Your Home
          </h2>
          <button className={classes.button}>Shop Now</button>
        </div>
      </section>
      <section className={classes.shop}>
        <div className={classes.shopHead}>
          <h3 className={classes.shopHeader}>New Plants</h3>
          <Button value="Shop Now" />
        </div>
        <div className={classes.items}>
          {DUMMY_DATA.slice(0, 6).map((item) => {
            return <Plant plant={item} key={item.id} />;
          })}
        </div>
      </section>
      <div className={classes.story}>
        <div className={classes.imageContainer}>
          <Image
            // src="https://images.unsplash.com/photo-1533090368676-1fd25485db88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            src="https://images.unsplash.com/photo-1550254469-e77c18c9252b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            layout="fill"
            priority
            className={classes.imageLeftStory}
            alt="image of cheese plant"
          />
        </div>
        <div className={classes.blurbRight}>
          <h3 className={classes.blurbFirstTitle}>OUR STORY</h3>
          <h2 className={classes.blurbSecondTitle}>
            For People Who Love Plants
          </h2>
          <p className={classes.blurbText}>
            Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc
            at velit lacinia porttitor a nulla tellus ultrices varius aliquet
            sed in placerat. Facilisis eu faucibus diam cursus pulvinar
            <br />
            <br />
            consectetur purus sem felis, mauris consectetur nisl vitae gravida
            ultricies sem condimentum aliquet ut sed gravida amet vitae euismod
            pulvinar volutpat laoreet pharetra.
          </p>
          <Button value="Read More" />
        </div>
      </div>
      <Testimonies />
      <GiftCard />
      <FrontPageTokens />
    </main>
  );
}
