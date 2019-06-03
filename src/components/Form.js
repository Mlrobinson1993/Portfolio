import React, { Component } from "react";
import ShortText from "./ShortText";
import "./styles/Form.scss";
import { Heading2 } from "./Heading";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon
} from "./Icons";
import Axios from "axios";

// import axios from "axios";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Get in touch!"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
      buttonText: "Message sent"
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      buttonText: "sending..."
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    Axios.post("nodejs-express-5v5zcv5n5.now.sh", data)
      .then(res => {
        this.setState(
          {
            sent: true
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not sent");
      });
  }
  render() {
    return (
      <div className="Form">
        <div className="Form-container">
          <div className="personal-info-container">
            <Heading2 text="My Details" row="1 / 3" col="2/3" />
            <ShortText text="+64 027 5939 836" row="3" col="2 / 6" />
            <ShortText text="MRobinsonwebdev@gmail.com" row="4" col="2 / 6" />
            <ShortText text="@MikeyDevs" row="5" col="2 / 6" />
            <ShortText text="MLRobinson1993" row="6" col="2 / 6" />
            <ShortText text="Michael-Robinson1993" row="7" col="2 / 6" />
            <GithubIcon row="6" col="1" />
            <TwitterIcon row="5" col="1" />
            <LinkedinIcon row="7" col="1" />
            <MailIcon row="4" col="1" />
            <PhoneIcon row="3" col="1" />
          </div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              placeholder="Email"
            />
            <textarea
              onChange={this.handleChange}
              name="message"
              placeholder="Message"
            />
            <button type="submit"> {this.state.buttonText} </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
