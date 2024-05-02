import React, { useState } from "react";
import Grid from "@mui/joy/Grid";
import { Link } from "react-router-dom";
import Blogcard from "../components/Blogcard";
import SearchBar from "../components/Searchbar";
import "../styles/Blog.css";
import Home from "../assets/Home.png";
import { blogPageData, urls } from "../components/Data";
import CustomButton from "../soundReact/customButton";


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
    <Grid>
      <Grid className="CenterContainer">
        <SearchBar onChange={handleSearchChange}/>
      </Grid>
      <Grid className="CenterContainer">
        <CustomButton className='resourceButton' onClick={handleClick}
        variant={Blog}>
          Resource of the Day!
          </CustomButton>
      </Grid>
      <Grid sx={{padding: "20px"}}className="BlogPageContainer">
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
        ))}
      </Grid>
      <Grid className="footerA">
      <Link to="../Home">
<img src={Home} alt="Home" style={{ padding: "5px", }} />
</Link>
      </Grid>
    </Grid>
  )
}

export default Blog;
