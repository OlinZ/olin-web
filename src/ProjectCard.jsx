import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";

import "./ItemCard.css";

import GithubButton from "./components/GithubButton";

import discord from "./images/discord.png";
import weather from "./images/weather.png";
import stock from "./images/stock.png";
import cookie from "./images/cookie.png";
import book from "./images/book.png";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <h3 className="cardLeft">Projects</h3>
        {/* <div className="verticalLine" style={{ borderColor: "#c5abf4" }}></div> */}
        <div className="itemCard">
          <Fade duration={1500}>
            <div className="item">
              {/* <div className="cardLeft"> */}
              {/* <Image src={cookie} rounded className="experienceLogo"></Image> */}
              {/* </div> */}
              {/* <div className="verticalLine"></div> */}
              <div className="cardRight">
                <div className="projectName">
                  <h3>Take a Break, Have a Cookie</h3>
                  <GithubButton
                    url="https://github.com/jnkarate/HackDay"
                    private={true}
                  ></GithubButton>
                </div>

                <p>
                  <div className="projectType">MathWorks HackDay Project</div>
                  <br />
                  {/* <br /> */}
                  Software that periodically reminds computer users to{" "}
                  <highlight>take a break</highlight>. Additional functionality
                  includes <highlight>automatic screen dimming</highlight> and{" "}
                  <highlight>customizability</highlight>. Completed with a group
                  of six interns in eight hours during a corporate-sponsored
                  hackathon.
                </p>
                <div className="languages">
                  <div>C#</div>
                  <div>.NET Framework</div>
                </div>
              </div>
            </div>
            <div className="item">
              {/* <div className="verticalLine"></div> */}
              <div className="cardRight">
                <h3>Stock Alert</h3>
                <p>
                  <div className="projectType">Personal Project</div>
                  {/* <br /> */}
                  <br />A light web application to <highlight>
                    notify
                  </highlight>{" "}
                  users by <highlight>text</highlight> or{" "}
                  <highlight>call</highlight> when a particular stock hits a
                  particular price. Idea inspired by a friend who took interest
                  into stock trading but was too lazy to wake up when market
                  opened. <br />
                  Here I learned to leverage multiple{" "}
                  <highlight>APIs</highlight> and host the backend server on{" "}
                  <highlight>AWS Lambda</highlight>.
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
              {/* <div className="verticalLine"></div> */}
              <div className="cardRight">
                <div className="projectName">
                  <h3>Ketabcheh</h3>
                  <GithubButton
                    url="https://github.tamu.edu/mgorjian/Project4"
                    private={false}
                  ></GithubButton>
                </div>
                <p>
                  <div className="projectType">School Project</div>
                  {/* <br /> */}
                  <br />A web application to ease the process of buying books by{" "}
                  <highlight>comparing prices</highlight> and{" "}
                  <highlight>showing reviews</highlight> from different sources.
                  Utilized Google Books API, Goodreads API, and BooksRun API to
                  fetch details on different books. Worked with a group of three
                  in an <highlight>agile</highlight> environment.
                </p>
                <div className="languages">
                  <div>Python</div> <div>Django</div>
                  <div>HTML</div> <div> Google Books API</div>
                  <div>Goodreads API</div> <div>BooksRun API</div>
                </div>
              </div>
            </div>

            <div className="item">
              {/* <div className="verticalLine"></div> */}
              <div className="cardRight">
                <h3>Road Conditions</h3>
                <p>
                  <div className="projectType">Personal Project</div>
                  {/* <br /> */}
                  <br />A web application to provide a simple way to{" "}
                  <highlight>check weather when planning a road trip</highlight>
                  . Displays the weather every thirty minutes on the route.{" "}
                  <br /> Idea inspired by my mom who worries every time I drive
                  back to school and constantly check the weather to make sure I
                  will be ok.
                </p>
                <div className="languages">
                  <div>React</div>
                  <div>NodeJS</div> <div> Google Maps API</div>
                  <div>Open Weather API</div>
                </div>
              </div>
            </div>

            <div className="item last-card">
              {/* <div className="verticalLine"></div> */}
              <div className="cardRight">
                <h3>Discord Bot</h3>
                <p>
                  <div className="projectType">Personal Project</div>
                  <br />
                  {/* <br /> */}
                  My first personal computer science project. I use this bot in
                  my personal Discord server to provide my friends with a unique
                  and entertaining experience when chatting or playing games. It{" "}
                  <highlight>sends images</highlight> from reddit and{" "}
                  <highlight>voice messages</highlight> based on commands given
                  by the users.
                </p>
                <div className="languages">
                  <div>Python</div>
                  <div>PRAW API</div> <div>Discord.py</div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
