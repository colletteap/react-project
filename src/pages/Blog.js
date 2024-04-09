import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blogcard from "../components/Blogcard";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import Home from "../assets/Home.png";
import { blogPageData, urls } from "../components/Data";


function Blog() {
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const handleClick = () => {
    const nextUrlIndex = (currentUrlIndex + 1) % urls.length;
    setCurrentUrlIndex(nextUrlIndex);
    window.open(urls[nextUrlIndex], '_blank');
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <div className="CenterContainer">
        <SearchBar onChange={handleSearchChange}/>
      </div>
      <div className="CenterContainer">
        <button className='resourceButton' onClick={handleClick}>Resource of the Day!</button>
      </div>
      <div className="BlogPageContainer">
        {blogPageData.filter((type) => type.content.toLowerCase().includes(searchInput.toLowerCase())
          ).map((type, index) => (
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
