import React, { Component } from "react";

import "./GithubButton.css";

class GithubButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          href={this.props.url}
          target="_blank"
          className="githubButton hvr-sweep-to-top"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    );
  }
}

export default GithubButton;
