import React, { Component } from "react";
import "./styles/Project.scss";

export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSVG: true
    };
  }
  render() {
    return (
      <div className="Project-image_container">
        <img
          src={require(`${this.props.image}`)}
          alt={this.props.title}
          className={
            this.props.hasSVG
              ? "Project-image Project-image_svg"
              : "Project-image"
          }
        />
      </div>
    );
  }
}

export default Project;
