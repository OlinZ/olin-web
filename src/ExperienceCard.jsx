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
        <Fade bottom>
          <div className="cardLeft">
            <Image src={mathworks} rounded className="experienceLogo"></Image>
            <h3>MathWorks - EDG Intern</h3>
          </div>
          <div className="verticalLine"></div>
          <div className="cardRight">
            <div>
              Various educators teach rules governing the length of paragraphs.
              They may say that a paragraph should be 100 to 200 words long, or
              be no more than five or six sentences. But a good paragraph should
              not be measured in characters, words, or sentences. The true
              measure of your paragraphs should be ideas.
            </div>
          </div>
          <div className="cardLeft">
            <Image src={tyson} rounded className="experienceLogo"></Image>
            <h3>Tyson Foods - Full Stack Intern</h3>
          </div>
          <div className="verticalLine"></div>
          <div className="cardRight">
            <div>
              Various educators teach rules governing the length of paragraphs.
              They may say that a paragraph should be 100 to 200 words long, or
              be no more than five or six sentences. But a good paragraph should
              not be measured in characters, words, or sentences. The true
              measure of your paragraphs should be ideas.
            </div>
          </div>
          <div className="cardLeft">
            <Image src={physics} rounded className="experienceLogo"></Image>
            <h3>Undergraduate Teaching Fellow</h3>
          </div>
          <div className="verticalLine"></div>
          <div className="cardRight">
            <div>
              Various educators teach rules governing the length of paragraphs.
              They may say that a paragraph should be 100 to 200 words long, or
              be no more than five or six sentences. But a good paragraph should
              not be measured in characters, words, or sentences. The true
              measure of your paragraphs should be ideas.
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
