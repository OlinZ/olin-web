import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import "./ItemCard.css";

import discord from "./images/discord.png";
import weather from "./images/weather.png";
import stock from "./images/stock.png";
import cookie from "./images/cookie.png";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="itemCard">
        <Fade duration={1500}>
          <div className="item">
            <div className="cardLeft">
              <Image src={cookie} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Take a Break, Have a Cookie</h3>
              <p>
                A MathWorks HackDay project. Reminds users using computers to
                take a break while dimming the screen brightness. Completed with
                a group of six interns in eight hours.
              </p>
              <div className="languages">
                <div>C#</div>
                <div>.NET Framework</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cardLeft">
              <Image src={stock} rounded className="experienceLogo"></Image>
            </div>
            <div className="verticalLine"></div>
            <div className="cardRight">
              <h3>Stock Alert</h3>
              <p>
                A light web application to notify users when a particular stock
                hits a particular price. Idea inspired by a friend who took
                interest into stock trading but was too lazy to wake up when
                market opened. <br />
                Here I learned to leverage multiple APIs and host the backend
                server on AWS Lambda.
              </p>
              <div className="languages">
                <div>React</div>
                <div>NodeJS</div> <div> ExpressJS</div>
                <div>Serverless</div>
                <div>AWS Lambda</div>
                <div>Twilio API</div>
                <div>Finnhub API</div>
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
              <p>
                A web application to provide a simple way to check weather when
                planning a road trip. Displays the weather every thirty minutes
                on the route. <br /> Idea inspired by my mom who worries every
                time I drive back to school and constantly check the weather to
                make sure I will be ok.
              </p>
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
              <p>
                My first personal computer science project. I use this bot in my
                personal Discord server to provide my friends with a unique and
                entertaining experience when chatting or playing games. It sends
                images from reddit or voice messages based on commands given by
                the users.
              </p>
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
