import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class SkillsCard extends Component {
  state = {};
  render() {
    return (
      <div className="skillPage">
        <Fade duration={1500}>
          <div className="skillColumn">
            <div className="leftAlign">
              <h3>Languages</h3>
              <p>Java</p>
              <p>JavaScript</p>
              <p>C++</p>
              <p>Python</p>
              <p>MATLAB</p>
              <p>SQL</p>
              <p>Bash Script</p>
            </div>
          </div>
          <div className="skillColumn">
            <div className="leftAlign">
              <h3>Web Development</h3>
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Bootstrap</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div className="skillColumn">
            <div className="leftAlign">
              <h3>Tools</h3>
              <p>MySQL</p>
              <p>AWS Lambda</p>
              <p>AWS API Gateway</p>
              <p>Unix</p>
              <p>OpenStack</p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SkillsCard;
