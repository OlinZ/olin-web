import React, { Component } from "react";

class Languages extends Component {
  state = {};
  render() {
    return (
      <div className="greyBackground">
        <h2>Languages</h2>
        <div className="flexPage">
          <ul className="horizontalList">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>SQL</li>
            <li>C++</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Languages;
