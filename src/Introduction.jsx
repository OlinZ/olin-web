import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Introduction extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <h3 className="cardLeft">Introduction</h3>
        {/* <div className="verticalLine"></div> */}
        <div className="itemCard">
          <Slide bottom>
            <div className="item last-card">
              <p className="cardRight">
                <div>
                  Hi, my name is Olin Zhou. <br />
                  <br />
                  I’m currently a <highlight>senior</highlight> at Texas A&M
                  University, majoring in{" "}
                  <highlight>computer science</highlight> and minoring in{" "}
                  <highlight>business</highlight>. You can typically find me on
                  the 4th floor of Evans Library grinding on CS projects or
                  working out at the rec center.
                  <br />
                  <br />
                  My previous internships were at{" "}
                  <highlight>Tyson Foods</highlight> and{" "}
                  <highlight>Mathworks</highlight>, where I worked on projects
                  in <highlight>web development</highlight> and{" "}
                  <highlight>testing automation</highlight>. I am currently
                  looking for <highlight>post-graduation positions</highlight>{" "}
                  for the fall of 2021 and am particularly interested in{" "}
                  <highlight>full-stack development</highlight> and{" "}
                  <highlight>data analytics</highlight>. <br /> <br />
                  <p>
                    I am also involved with the TAMU chapters of{" "}
                    <highlight>SASE</highlight> (Society of Asian Scientists and
                    Engineers) as well as <highlight>VSA</highlight> (Vietnamese
                    Student Association), where I volunteer during{" "}
                    <a
                      href="https://bigevent.tamu.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Big Event
                    </a>{" "}
                    helping out the local community. In my free time, I enjoy
                    working out and cooking.
                  </p>
                </div>

                <a
                  href={
                    "https://github.com/OlinZ/resume/blob/master/resume.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here is my resume.
                </a>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Introduction;
