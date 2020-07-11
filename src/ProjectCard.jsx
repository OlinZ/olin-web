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
        <Fade duration={1500}>
          <div className="item">
            <div className="cardLeft">
              <Image src={stock} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Stock Alert</h3>
              <div>
                This web application was inspired by a friend who's into stock
                trading but was too lazy to wake up when market opened. It
                notifies users either by text or phone call whenever a stock
                hits a desired price.
              </div>
              <div className="languages">
                <div>React</div>
                <div>NodeJS</div> <div> ExpressJS</div>
                <div>Serverless</div>
                <div>AWS Lambda</div>
                <div>Twilio API</div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="cardLeft">
              <Image src={weather} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Road Conditions</h3>
              <div>
                My mom always worries whenever I drive back home or to college
                due to weather conditions. She checks the weather for every
                location I drive through at the estimated time I will be there.
                So I made a web application that maps weather details on a route
                given a starting and ending location.
              </div>
              <div className="languages">
                <div>React</div>
                <div>NodeJS</div> <div> Google Maps API</div>
                <div>Open Weather</div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="cardLeft">
              <Image src={discord} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Discord Bot</h3>
              <div>
                My first personal computer science project. I use this bot in my
                personal Discord server to provide my friends with a unique and
                entertaining experience when chatting or playing games. It sends
                images from reddit or voice messages based on commands given by
                the users.
              </div>
              <div className="languages">
                <div>Python</div>
                <div>PRAW API</div> <div>Discord.py</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ProjectCard;
