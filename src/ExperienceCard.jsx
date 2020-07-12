import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import "./ItemCard.css";

import mathworks from "./images/mathworks.png";
import tyson from "./images/tyson.png";
import physics from "./images/tamuPhysics.png";

class ExperienceCard extends Component {
  state = {};
  render() {
    return (
      <div className="itemCard">
        <Fade duration={1500}>
          <div className="item">
            <div className="cardLeft">
              <Image src={mathworks} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>MathWorks - EDG Intern</h3>
              <div className="date">Incoming, Summer 2020</div>
              <div className="languages"></div>
            </div>
          </div>
          <div className="item">
            <div className="cardLeft">
              <Image src={tyson} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Tyson Foods - Full Stack Intern</h3>
              <div className="date">Summer, 2019</div>
              <p>
                My first ever internship and door way to software engineering. I
                worked on a responsive and cloud enabled intake form for the
                transportation department that tracked truck incidents such as
                accidents and citations. Not only did I gain insight on web
                development, I also got to enjoy the natural scenery of
                Arkansas.
              </p>
              <div className="languages">
                <div>React</div>
                <div>NodeJS</div> <div>AWS Aurora</div> <div>AWS Lambda</div>
                <div>Docker</div> <div>Kubernetes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cardLeft">
              <Image src={physics} rounded className="experienceLogo"></Image>
              {/* <h3></h3> */}
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Undergraduate Teaching Fellow</h3>
              <div className="date">Spring, 2019</div>
              <p>
                I held recitation sessions for physics students taking Newtonian
                Mechanics. Here I learned to convey my knowledge to others while
                working with other UTFs to create both a professional and
                enjoyable experience for students.
              </p>
              <div className="languages"></div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
