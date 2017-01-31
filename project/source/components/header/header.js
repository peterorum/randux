// flow weak

import React from 'react';
import { Link } from 'react-router';

const Header = () =>

  <header role='banner'>
    <Link className='image-link' to='/'><img src='/images/logo.png' alt='logo' /></Link>
  </header>

export default Header;
