import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Introduction extends Component {
  state = {};
  render() {
    return (
      <div className="itemCard">
        <Fade duration={1500}>
          <div className="item">
            <h3 className="cardLeft">Introduction</h3>
            {/* <div className="verticalLine"></div> */}
            <p className="cardRight">
              I am currently a senior computer science major at Texas A&M
              interested in full stack development and cloud computing. When I'm
              not in class or chilling at home, you can often find me on the 4th
              floor of Evans Library grinding out projects or in the Student
              Recreation Center pumping iron. <br /> <br />
              My last internships at Tyson Foods and MathWorks focused on web
              development and testing automation. I am currently looking for
              2021 full time positions. <br /> <br />
              <a
                href={"https://github.com/OlinZ/resume/blob/master/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Here is my resume.
              </a>
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Introduction;
