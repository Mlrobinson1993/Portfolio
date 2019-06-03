import React, { Component } from "react";
import "./styles/Card.scss";
export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Card Card-${this.props.num}`}>
        {this.props.SVGNum}
        <h3 className="Card-heading">{this.props.heading}</h3>
        <p className="Card-para">{this.props.paraText}</p>
      </div>
    );
  }
}

export default Card;
