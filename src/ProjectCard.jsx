import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import "./ItemCard.css";

import discord from "./images/discord.png";
import weather from "./images/weather.png";
import stock from "./images/stock.png";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="itemCard">
        <Fade bottom>
          <div className="cardLeft">
            <Image src={discord} rounded className="experienceLogo"></Image>
            <h3>Discord Bot</h3>
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
            <Image src={weather} rounded className="experienceLogo"></Image>
            <h3>Road Conditions</h3>
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
            <Image src={stock} rounded className="experienceLogo"></Image>
            <h3>Stock Alert Bot</h3>
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

export default ProjectCard;
