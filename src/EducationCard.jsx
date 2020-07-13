import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import "./ItemCard.css";

import tamu from "./images/tamu.png";

class EducationCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="itemCard">
          <Fade duration={1500}>
            <div className="item">
              <div className="cardLeft">
                <Image src={tamu} rounded className="experienceLogo"></Image>
              </div>
              <div className="verticalLine"></div>
              <div className="cardRight">
                <h3>Texas A&M University</h3>
                <div className="date">Class of 2021</div>
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
                  helping out the local community. I also enjoy working out and
                  cooking in my free time.
                </p>
                {/* <div>PRAW API, Discord.py, Python</div> */}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default EducationCard;
