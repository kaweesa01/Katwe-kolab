import React, { Fragment } from 'react';
import './style/style.css';
//import Form from "./redux/form";
import Home from "./redux/layouts/homePage/Home";
import LogoView from './redux/layouts/header/logoView'

function App() {
  return (
    <Fragment>
      <Home />
      <LogoView />
    </Fragment>
  );
}

export default App;
