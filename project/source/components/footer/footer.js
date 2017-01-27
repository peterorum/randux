// flow weak

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {

  render() {

    return (
    <footer role='contentinfo'>
      <p>
        <Link to='/about'>about</Link>
      </p>
      <p className='small-text'>&copy; 2017 Seraline P/L</p>
    </footer>
    );
  }
}

export default Footer;

