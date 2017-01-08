import React from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';

class Main extends React.Component {

  render() {

    return (
    <div>
      <Header />
      { React.cloneElement( this.props.children, this.props ) }
      <Footer />
    </div>
    );
  }
}

export default Main;
