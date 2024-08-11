import React from "react";
import {resumeUrl, ashraf, hussain} from "./images/index";

const Resume = () => {
  return (
    <section id="resume">
      <div className="about_parent">
        <div className="about_first">
          <img style={{width: "100%"}} src={ashraf} alt="" />
          <img style={{width: "100%"}} src={hussain} alt="" />

          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <h3>Download Resume</h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
