import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class SkillsCard extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <h3 className="cardLeft">Skills</h3>
        <div className="skillPage">
          <Slide bottom>
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
          </Slide>
        </div>
      </div>
    );
  }
}

export default SkillsCard;
