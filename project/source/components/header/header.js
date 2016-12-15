import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass( {

  render() {

    return (
    <header role='banner'>
        <Link className='image-link' to='/'><img src='/images/logo.png' /></Link>
    </header>
    );
  }
} );

export default Header;
