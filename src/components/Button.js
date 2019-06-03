import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <button>{this.props.text}</button>
      </React.Fragment>
    );
  }
}
