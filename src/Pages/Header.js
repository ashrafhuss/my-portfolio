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

  const handleClick = (id) => {
    setClickedImage(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  const images = [
    {id: "about", default: about, hover: aboutHovering},
    {id: "resume", default: resume, hover: resumeHovering},
    {id: "work", default: work, hover: workHovering},
    {id: "blog", default: blog, hover: blogHovering},
    {id: "contact", default: contact, hover: contactHovering},
  ];

  return (
    <div className="header_p">
      <div className="logo_parent">
        <img src={logo} alt="logo" className="logo_name" />
      </div>
      <div className="header_parent">
        <ul className="header_tab">
          {images.map((image) => (
            <li key={image.id}>
              <img
                src={
                  hoveredImage === image.default ||
                  clickedImage === image.default
                    ? image.hover
                    : image.default
                }
                alt={image.id}
                onMouseEnter={() => handleMouseEnter(image.default)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(image.id)}
                className="svg-logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
