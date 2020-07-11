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
              <h4>Languages</h4>
              <div>Java</div>
              <div>JavaScript</div>
              <div>C++</div>
              <div>Python</div>
              <div>MATLAB</div>
              <div>SQL</div>
              <div>Bash Script</div>
            </div>
          </div>
          <div className="skillColumn">
            <div className="leftAlign">
              <h4>Web Development</h4>
              <div>React</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>Bootstrap</div>
              <div>HTML</div>
              <div>CSS</div>
            </div>
          </div>
          <div className="skillColumn">
            <div className="leftAlign">
              <h4>Tools</h4>
              <div>MySQL</div>
              <div>AWS Lambda</div>
              <div>AWS API Gateway</div>
              <div>Unix</div>
              <div>OpenStack</div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SkillsCard;
