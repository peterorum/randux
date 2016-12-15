import React from 'react';

import Button from '../button/button';

// todo
// https://facebook.github.io/react/docs/animation.html
// import CSSTransitionGroup from 'react-addons-css-transition-group';

const Word = React.createClass( {

  render() {

    const {word} = this.props;

    return (
    <div className='word'>
      <p>
        { word }
      </p>
      <div className='btn-container'>
        <Button {...this.props}/>
      </div>
    </div>
    );
  }
} );

export default Word;
