"use client";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

import classes from "./page.module.css";

import { PLANT_DATA } from "@/utils/format";

import Testimonies from "@/components/HomePageComponents/testimonies/Testimonies";
import GiftCard from "@/components/HomePageComponents/giftCard/GiftCard";
import FrontPageTokens from "@/components/HomePageComponents/frontPageToken/FrontPageTokens";
import OurStory from "@/components/HomePageComponents/ourStory/OurStory";
import DisplayPlantsShop from "@/components/HomePageComponents/displayPlantsShop/DisplayPlantsShop";
import HeroImage from "@/components/HomePageComponents/heroImage/HeroImage";

export default function Home() {
  const router = useRouter();
  const redirectHandler = (destination) => router.push(`${destination}`);
  return (
    <main className={classes.main}>
      <HeroImage onClick={() => redirectHandler("/plants")} />
      <DisplayPlantsShop
        PLANT_DATA={PLANT_DATA}
        onClick={() => redirectHandler("/plants")}
      />
      <OurStory onClick={() => redirectHandler("/about")} />
      <Testimonies />
      <GiftCard onClick={() => redirectHandler("/checkout")} />
      <FrontPageTokens />
    </main>
  );
}
