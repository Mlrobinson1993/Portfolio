import React, { Component } from "react";
import "./styles/Heading.scss";
import "./styles/Typography.scss";

class Heading1 extends Component {
  render() {
    return (
      <React.Fragment>
        <h1
          className="Section-heading Section-heading-primary"
          style={{
            color: `${this.props.color}`,
            transform: `${this.props.position}`,
            gridRow: `${this.props.row}`,
            gridColumn: `${this.props.col}`
          }}
        >
          {this.props.text}
        </h1>
      </React.Fragment>
    );
  }
}

class Heading2 extends Component {
  render() {
    return (
      <React.Fragment>
        <h2
          className="Section-heading Section-heading-secondary"
          style={{
            color: `${this.props.color}`,
            transform: `${this.props.position}`,
            gridRow: `${this.props.row}`,
            gridColumn: `${this.props.col}`
          }}
        >
          {this.props.text}
        </h2>
      </React.Fragment>
    );
  }
}

class Heading4 extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="Section-subheading Section-subheading-secondary">
          {this.props.text}
        </h4>
      </React.Fragment>
    );
  }
}

export { Heading1, Heading2, Heading4 };
