import React from "react";
import Landingblogcard from "./Landingblogcard.js";
import "../styles/Bloglanding.css";
import { blogData } from "./Data.js";

const BlogLanding = () => {
  return (
    <>
      <h1 className="whiteHeading">Resources from real teachers</h1>
      
      <div className="BlogContainer">
        {blogData.map((item, index) => {
         <Landingblogcard
         key={index}
         title={item.title}
         content={item.content}
         linkTo={item.linkTo}
         image={item.image}
       /> 
        })}
        
      
      </div>
      
    </>
  );
};

export default BlogLanding;
