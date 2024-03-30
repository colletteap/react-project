import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blogcard from "../components/Blogcard";
import BlogLanding1 from "../assets/bloglanding1.png";
import BlogLanding2 from "../assets/bloglanding2.png";
import BlogLanding3 from "../assets/bloglanding3.png";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import Home from "../assets/Home.png";

const urls = [
  'https://www.burnedinteacher.com/',
  'https://teacherwellnesscenter.com/',
  'https://brenebrown.com/hubs/dare-to-lead/',
  'https://newedtechclassroom.com/',
  'https://www.teachstarter.com/resource-availability/free/',
  'https://www.refseek.com/directory/teacher_resources.html',
  'https://www.pbslearningmedia.org/',
  'https://www.carsondellosa.com/free-resources/',
  'https://sharemylesson.com/',
  'https://www.youtube.com/@LearnBright',
  'https://www.youtube.com/@SciShowKids',
  'https://www.youtube.com/@crashcoursekids',
  'https://artforkidshub.com/',
];

function Blog() {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  const handleClick = () => {
    const nextUrlIndex = (currentUrlIndex + 1) % urls.length;
    setCurrentUrlIndex(nextUrlIndex);
    window.open(urls[nextUrlIndex], '_blank');
  };

  return (
    <div>
      <div className="CenterContainer">
        <SearchBar />
      </div>
      <div className="CenterContainer">
        <button className='resourceButton' onClick={handleClick}>Resource of the Day!</button>
      </div>
      <div className="BlogPageContainer">
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
      <div className="footerA">
      <Link to="../Home">
<img src={Home} alt="Home" style={{ padding: "5px", }} />
</Link>
      </div>
    </div>
  );
}

export default Blog;
