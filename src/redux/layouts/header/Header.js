import React, { Component, Fragment } from "react";

import logo from "../../images/logo.png";
import menu from "../../svgs/menu.svg";

class Header extends Component {
  constructor() {
    super();
  }

  onClick() {
    document.querySelector(".logo-view").classList.remove("slide-View");
  }

  render() {
    return (
      <Fragment>
        <header>
          <div className="logo">
            <img onClick={this.onClick} src={logo} alt="katwe-colab-logo" />
          </div>
          <nav className="navBar">
            <a href="">Blog</a>
            <a href="">About</a>
            <a href="">Work</a>
            <a href="">Contact</a>
            <a href="">Login | Register</a>
          </nav>
          <div className="menu">
            <img src={menu} alt="menu button" />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
