import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blogcard from "../components/Blogcard";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import Home from "../assets/Home.png";
import { blogPageData } from "../components/Data";

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
        {blogPageData.map((type, index) => (
        <Blogcard
          key={index}
          title={type.title}
          content={type.content}
          linkTo={type.linkTo}
          image={type.image}
          para1={type.para1}
          para2={type.para2}
        />
        ))};
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
