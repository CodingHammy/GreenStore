import React from "react";

import Image from "next/image";

import classes from "./Story_Section.module.css";

const Story_Section = () => {
  return (
    <div className={classes.story_section}>
      <h2 className={classes.story_left}>OUR STORY</h2>
      <div className={classes.story_right}>
        <p className={classes.story_paragraph}>
          Tristique dapibus porta viverra sit accumsan integer semper dolor
          etiam id iaculis feugiat egestas urna est magna euismod donec
          facilisis sed integer orci ac.
          <br />
          <br />
          Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit
          mauris semper platea urna, sapien fermentum venenatis etiam enim
          ullamcorper phasellus tortor justo, et, pellentesque pellentesque
          sapien faucibus in adipiscing risus adipiscing bibendum in nec eget
          tincidunt in in sed magna arcu molestie nec mauris quisque.
          <br />
          <br />
          Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in
          volutpat faucibus elementum, sodales orci mi fames molestie venenatis
          nunc hendrerit.
        </p>
        <Image
          src="/qoute.svg"
          width={35}
          height={35}
          alt="icon of openning speech marks"
        />
        <h3 className={classes.testimonial}>
          Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
          tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec
          ullamcorper vel.
        </h3>
        <div className={classes.nameTag_section}>
          <Image
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            width={40}
            height={40}
            className={classes.nameTag_owner_image}
            alt={"image of Will Wharton"}
          />
          <div className={classes.nameTag_right}>
            <p className={classes.nameTag_name}>Will Wharton</p>
            <p className={classes.nameTag_jobPostion}>Owner, Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story_Section;
