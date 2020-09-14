import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-reveal/Fade";

import Introduction from "./Introduction";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import SkillsCard from "./SkillsCard";

import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import email from "./images/email.png";
import up from "./images/up.png";
import gnome from "./images/gnome.png";

import "./Main.css";
import "./Responsive.css";

class MainPage extends Component {
  state = {
    gnomeSound: new Audio(
      "https://www.myinstants.com/media/sounds/im-a-gnome-meme-sound-effect-woo.mp3"
    ),
  };
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  gnomed = (event) => {
    this.state.gnomeSound.play();
  };

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div>
        <div className="bg">
          <Navbar className="navbar" expand="lg" variant="light">
            <Link
              activeClass="active"
              className="navLink"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
            >
              Introduction
            </Link>
            <Link
              activeClass="active"
              className="navLink"
              to="experience"
              spy={true}
              smooth={true}
              duration={800}
            >
              Experiences
            </Link>
            <Link
              activeClass="active"
              className="navLink"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              className="navLink"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Skills
            </Link>
          </Navbar>

          <div className="titlePage">
            <div className="center">
              <ReactTypingEffect
                className="typing"
                text="Hi, I'm Olin"
                typingDelay="1000"
                eraseDelay="5000"
              />
              <div className="contact">
                <div className="imageContainer">
                  <a
                    href="https://www.linkedin.com/in/olin-zhou-4b905b169/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="contactImage"
                      src={linkedin}
                      rounded
                    ></Image>
                  </a>
                </div>
                <div className="imageContainer">
                  <a
                    href="https://github.com/OlinZ"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="contactImage"
                      src={github}
                      rounded
                    ></Image>
                  </a>
                </div>
                <div className="imageContainer">
                  <a href="mailto:olin.zhou.0@gmail.com">
                    <Image className="contactImage" src={email} rounded></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fade duration={1500}>
          <Element name="education" className="element">
            {/* <EducationCard></EducationCard> */}
            <Introduction></Introduction>
          </Element>
          <Element name="experience" className="element">
            {/* <div className="divider">
              <div className="horizontalLine"></div>
              <h2 className="title">Experiences</h2>
              <div className="horizontalLine"></div>
            </div> */}
            <ExperienceCard></ExperienceCard>
          </Element>
          <Element name="projects" className="element">
            {/* <div className="divider">
              <div className="horizontalLine"></div>
              <h2 className="title">Projects</h2>
              <div className="horizontalLine"></div>
            </div> */}
            <ProjectCard></ProjectCard>
          </Element>
          <Element name="skills" className="element">
            {/* <div className="divider">
              <div className="horizontalLine"></div>
              <h2 className="title">Skills</h2>
              <div className="horizontalLine"></div>
            </div> */}
            <SkillsCard></SkillsCard>
          </Element>
        </Fade>
        <Image src={up} onClick={this.scrollToTop} className="up"></Image>
        <img
          alt="gnomed"
          className="gnome"
          onClick={this.gnomed}
          src={gnome}
        ></img>
      </div>
    );
  }
}

export default MainPage;
