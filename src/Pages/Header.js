import React, {useState} from "react";
import "./style.css";
import {
  logo,
  about,
  resume,
  work,
  blog,
  contact,
  aboutHovering,
  resumeHovering,
  workHovering,
  blogHovering,
  contactHovering,
} from "./images/index";

const Header = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [clickedImage, setClickedImage] = useState(about);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
    setClickedImage(null);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleClick = (image) => {
    setClickedImage(image);
  };

  return (
    <div className="header_p">
      {/* <div className="logo_parent">
        <img src={logo} alt="logo" className="logo_name" />
      </div>
      <div className="header_parent">
        <ul className="header_tab">
          <li>
            <img
              src={
                hoveredImage === about || clickedImage === about
                  ? aboutHovering
                  : about
              }
              alt="about"
              onMouseEnter={() => handleMouseEnter(about)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(about)}
              className="svg-logo"
            />
          </li>
          <li>
            <img
              src={
                hoveredImage === resume || clickedImage === resume
                  ? resumeHovering
                  : resume
              }
              alt="resume"
              onMouseEnter={() => handleMouseEnter(resume)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(resume)}
              className="svg-logo"
            />
          </li>
          <li>
            <img
              src={
                hoveredImage === work || clickedImage === work
                  ? workHovering
                  : work
              }
              alt="work"
              onMouseEnter={() => handleMouseEnter(work)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(work)}
              className="svg-logo"
            />
          </li>
          <li>
            <img
              src={
                hoveredImage === blog || clickedImage === blog
                  ? blogHovering
                  : blog
              }
              alt="blog"
              onMouseEnter={() => handleMouseEnter(blog)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(blog)}
              className="svg-logo"
            />
          </li>
          <li>
            <img
              src={
                hoveredImage === contact || clickedImage === contact
                  ? contactHovering
                  : contact
              }
              alt="contact"
              onMouseEnter={() => handleMouseEnter(contact)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(contact)}
              className="svg-logo"
            />
          </li>
        </ul>
      </div> */}
      <h1>Header section</h1>
    </div>
  );
};

export default Header;
