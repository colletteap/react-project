import React from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import BlogLanding1 from "../assets/bloglanding1.png";
import BlogLanding2 from "../assets/bloglanding2.png";
import BlogLanding3 from "../assets/bloglanding3.png";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Resources from real teachers</h1>
      <div className="BlogContainer">
        <Landingblogcard
          title="Google Classroom Tips"
          content="NewEd Tech was a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They then expanded into a website where, with a free plan, you can learn bite sized, useful teacher skills."
          linkTo="/Blog.js"
          image={BlogLanding1}
        />
        <Landingblogcard
          title="Brene Brown's Leadership Tools"
          content="Brene Brown has a Ph. D in the social work field, has a very popular Ted talk and has a Netflix special based around personal development so that you can bring your best self into every situation."
          linkTo="/Blog.js"
          image={BlogLanding2}
        />
        <Landingblogcard
          title="The Happy Teacher Planner"
          content="With this planner, you can use a personalized calendar to keep track of special events and your to do list; focus on your personal growth through using a reflective journal and core values list; has a substitute plan and has resources for the tough times. "
          linkTo="/Blog.js"
          image={BlogLanding3}
        />
      </div>
    </>
  );
};

export default AdviceLanding;
