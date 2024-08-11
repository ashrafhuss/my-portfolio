import React, {useState} from "react";
import {
  phone,
  email,
  address,
  calendar,
  ui,
  apps,
  imageOpt,
  web,
  photograhpy,
  webDev,
} from "./images/index";
import Header from "./Header";
const About = () => {
  const infoData = [
    {img: phone, label: "Phone", value: "+923439228702"},
    {
      img: address,
      label: "Location",
      value: "Khyaban e ameen society G block, Lahore.",
    },
    {img: email, label: "Email", value: "ashrafapprocx@gmail.com"},
    {img: calendar, label: "Birthday", value: "April 07"},
  ];
  const backgroundColors = [
    null,
    "#FEFAF0",
    null,
    "#FFF4F4",
    "#FFF0F8",
    "#F3FAFF",
  ];
  const [isSkill, setIsSkill] = useState([
    {
      image: ui,
      sikllHeader: "UI/Ux Design",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
    {
      image: apps,
      sikllHeader: "App Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
    {
      image: imageOpt,
      sikllHeader: "Image Gallary",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
    {
      image: photograhpy,
      sikllHeader: "Photography",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
    {
      image: web,
      sikllHeader: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
    {
      image: webDev,
      sikllHeader: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam eUIsmod volutpat.",
    },
  ]);
  return (
    <div>
      <Header />
      <section id="about">
        <div className="about_parent">
          <div className="about_first">
            <div className="about_me">
              <span>About Me</span> <div className="about_red"></div>
            </div>
            <div className="Intro_parent">
              <div className="empty"></div>
              <div className="intro_child">
                <div>
                  <div className="header_info who_am">Who am i?</div>
                  <p className="phragraph">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intUItive designs.
                  </p>
                  <p className="phragraph">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intUItive designs.
                  </p>
                </div>
                <div className="parent_info">
                  <div className="header_info personal_info">Personal Info</div>
                  <div className="info_detail">
                    {infoData.map((item, index) => (
                      <div key={index} className="info_child">
                        <div className="info_imag_parent">
                          <img src={item.img} alt="" />
                        </div>
                        <div>
                          <div>{item.label}</div>
                          <div>{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="experinece_name ">
              <div className="header_info ">What I do!</div>
              <div className="info_detail experince_child">
                {isSkill.map((skill, index) => (
                  <div
                    key={index}
                    className="skils"
                    style={{
                      backgroundColor: backgroundColors[index],
                    }}>
                    <div className="">
                      <img src={skill.image} alt="" />
                    </div>
                    <div className="">
                      <div className="skill_header">{skill.sikllHeader}</div>
                      <p style={{textAlign: "justify"}}>{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="skills">App Development</div>
        <div className="org">Organization</div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
