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

import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import email from "./images/email.png";
import up from "./images/up.png";

import "./Main.css";

class MainPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

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
            {/* <Navbar.Brand href="#">Olin</Navbar.Brand> */}
            <Link
              activeClass="active"
              className="navLink"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
            >
              Education
            </Link>
            <Link
              activeClass="active"
              className="navLink"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
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
              to="languages"
              spy={true}
              smooth={true}
              duration={500}
            >
              Languages
            </Link>
          </Navbar>

          <div className="titlePage">
            <div className="center">
              <h1>Hi, I'm Olin</h1>

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

        <Element name="experience" className="element">
          <div className="horizontalLine"></div>
          <ExperienceCard></ExperienceCard>
        </Element>
        <Element name="projects" className="element">
          <div className="horizontalLine"></div>
          <ProjectCard></ProjectCard>
        </Element>
        <Image src={up} onClick={this.scrollToTop} className="up"></Image>

        {/* <Fade>
          <Element name="education" className="element">
            <Education></Education>
          </Element>
          <Element name="experience" className="element">
            <Experience></Experience>{" "}
          </Element>

          <Element name="projects" className="element">
            <Projects></Projects>
          </Element>
          <Element name="languages" className="element">
            <Languages></Languages>
          </Element>
        </Fade> */}
      </div>
    );
  }
}

export default MainPage;
