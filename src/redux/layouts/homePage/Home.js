import React, { Component, Fragment } from "react";

import Header from '../header/Header'
import HeaderBody from '../header/HeaderBody'
import '../../style/main.css'
import '../../style/styles.css'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <HeaderBody />
      </Fragment>
    );
  }
}

export default Home
