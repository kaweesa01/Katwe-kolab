import React, { Component, Fragment } from "react";

import logo from "../../images/logo.png";

class LogoView extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    if (
      ev.target.className === "logo-view" ||
      ev.target.className === "logo-view slide-View"
    ) {
      ev.target.classList.add('slide-View')
      console.log(ev.target)
    }
  }

  render() {
    return (
      <Fragment>
        <div onClick={this.onClick} className="logo-view slide-View">
          <div className="logo-img">
            <img src={logo} alt="katwe-colab-logo" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LogoView;
