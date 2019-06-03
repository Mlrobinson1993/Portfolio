import React, { Component } from "react";
import "./styles/Navbar.scss";

export class Navbar extends Component {
  render() {
    const navItems = [
      { text: "Home", link: "#", onClick: "#" },
      { text: "About", link: "#", onClick: "#" },
      { text: "Projects", link: "#", onClick: "#" },
      { text: "Contact", link: "#", onClick: "#" }
    ];

    return (
      <nav className="Navbar">
        {navItems.map(item => (
          <li className="Navbar-list" key={item.text}>
            <a className="Navbar-link" href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </nav>
    );
  }
}

export default Navbar;
