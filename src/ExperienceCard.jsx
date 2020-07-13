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
                At Tyson Foods I worked on developing an intake form to track
                truck incidents ranging from police warnings to accidents on the
                road. This was my first time doing any development work and was
                exposed to frontend, backend, and database design. Not only did
                I gain wonderful technical experience, I also explored Arkansas'
                beautiful scenary along with other interns.
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
                Mechanics. I created an entertaining environment for students to
                learn and "enjoy" physics. I held weekly review sessions and
                exam reviews for those needing additional assistant. Here I
                learned to express my thoughts and explore problems in unique
                ways.
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
