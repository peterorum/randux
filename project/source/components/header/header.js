// flow weak

import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {

    return (
    <header role='banner'>
        <Link className='image-link' to='/'><img src='/images/logo.png' /></Link>
    </header>
    );
  }
}

export default Header;
