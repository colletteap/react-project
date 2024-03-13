import React from "react";
import Blogcard from "../components/Blogcard";
import BlogLanding1 from "../assets/bloglanding1.png";
import BlogLanding2 from "../assets/bloglanding2.png";
import BlogLanding3 from "../assets/bloglanding3.png";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";

function Blog() {
  return (
    <div>
    <SearchBar />
    <div className="BlogContainer">
      <Blogcard
        title="Google Classroom Tips"
        content="NewEd Tech was a YouTube channel geared toward helping teachers learn tech is simple, quick & manageable bites. They then expanded into a website where, with a free plan, you can learn bite sized, useful teacher skills."
        linkTo="https://newedtechclassroom.com/"
        image={BlogLanding1}
        para1=""
        para2=""
      />
      <Blogcard
        title="Brene Brown's Leadership Tools"
        content="Brene Brown has a Ph. D in the social work field, has a very popular Ted talk and has a Netflix special based around personal development so that you can bring your best self into every situation."
        linkTo="https://brenebrown.com/hubs/dare-to-lead/"
        image={BlogLanding2}
        para1=""
        para2=""
      />
      <Blogcard
        title="The Happy Teacher Planner"
        content="With this planner, you can use a personalized calendar to keep track of special events and your to do list; focus on your personal growth through using a reflective journal and core values list; has a substitute plan and has resources for the tough times. "
        linkTo="https://colletteap.github.io/gratitude-planner/"
        image={BlogLanding3}
        para1=""
        para2=""
      />
       <Blogcard
        title="The Happy Teacher Planner"
        content="With this planner, you can use a personalized calendar to keep track of special events and your to do list; focus on your personal growth through using a reflective journal and core values list; has a substitute plan and has resources for the tough times. "
        linkTo="https://colletteap.github.io/gratitude-planner/"
        image={BlogLanding3}
        para1=""
        para2=""
      />
      </div>
    </div>
  );
}

export default Blog;
