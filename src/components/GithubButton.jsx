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
        >
          GitHub
        </a>
      </div>
    );
  }
}

export default GithubButton;
