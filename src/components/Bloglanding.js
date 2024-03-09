import React from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import BlogLanding1 from "../assets/bloglanding1.png";

const AdviceLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Resources from real teachers</h1>
      <div className="BlogContainer">
        <Landingblogcard
          title="Google Classroom Tips"
          content="NewEd Tech is a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They focus on technology tools related to Google, such as Google Classroom, Slides, Jamboard, Extensions etc.."
          linkTo="/Blog.js"
          image={BlogLanding1}
        />
        <Landingblogcard />
        <Landingblogcard />
      </div>
    </>
  );
};

export default AdviceLanding;
