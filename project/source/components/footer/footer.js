import React from 'react';
import {Link} from 'react-router';

const Footer = React.createClass({

  render() {
    return (
      <footer>
        <Link to='/about'>about</Link>
      </footer>
      );
  }
});

export default Footer;


