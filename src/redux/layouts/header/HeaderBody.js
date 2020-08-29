import React, { Component, Fragment } from "react";

class HeaderBody extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo-box">
            {/* <!-- <img src="img/logo-white.png" alt="logo" class="logo" /> --> */}
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">KATWE</span>
              <span className="heading-primary-sub">Katwe Colab</span>
            </h1>
            <a href="" className="btn btn-white btn-animated">
              JOIN US
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderBody;
