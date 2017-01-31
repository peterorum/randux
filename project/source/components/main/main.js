// flow weak

import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

const Main = (props) =>

  <div>
    <Header />
    { React.cloneElement( props.children, props ) }
    <Footer />
  </div>

Main.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Main;
