import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass( {

  render() {

    return (
    <header role='banner'>
      <h1>
        <Link to='/'><img src='/images/logo.png' /></Link>
      </h1>
    </header>
    );
  }
} );

export default Header;
