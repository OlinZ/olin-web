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
        {this.props.private ? <div className="tiny">private</div> : <div />}
      </div>
    );
  }
}

export default GithubButton;
