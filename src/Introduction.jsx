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
            <p className="cardRight">
              <div>
                Hi, my name is Olin Zhou. <br />
                <br />
                I’m currently a <highlight>senior</highlight> at Texas A&M,
                majoring in <highlight>computer science</highlight> and minoring
                in <highlight>business</highlight>. You can typically find me on
                the 4th floor of Evans Library grinding on CS projects or
                working out at the rec center.
                <br />
                <br />
                My previous internships were at{" "}
                <highlight>Tyson Foods</highlight> and{" "}
                <highlight>Mathworks</highlight>, where I worked on projects in{" "}
                <highlight>web development</highlight> and{" "}
                <highlight>testing automation</highlight>. I am currently
                looking for <highlight>post-graduation positions</highlight> for
                the fall of 2021 and am particularly interested in{" "}
                <highlight>full-stack development</highlight> and{" "}
                <highlight>cloud computing</highlight>. <br /> <br />
              </div>

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
