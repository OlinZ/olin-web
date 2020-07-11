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
                <div>
                  I am currently pursuing a bachelor's degree in computer
                  science along with a minor in business. My involvement with
                  TAMU SASE and VSA has given me limitless opportunities and
                  unforgettable experiences.
                </div>
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
