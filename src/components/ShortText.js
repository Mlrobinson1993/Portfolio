import React, { Component } from "react";
import "./styles/ShortText.scss";
export class ShortText extends Component {
  render() {
    return (
      <React.Fragment>
        <p
          className="ShortText"
          style={{
            gridRow: `${this.props.row}`,
            gridColumn: `${this.props.col}`,
            color: "#3F3D56"
          }}
        >
          {this.props.text}
        </p>
      </React.Fragment>
    );
  }
}

export default ShortText;
