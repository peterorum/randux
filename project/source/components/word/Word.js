import React from 'react';

import Button from '../button/button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Word = React.createClass( {

  render() {

    const {word} = this.props;

    return (
    <div className='word'>
      <ReactCSSTransitionGroup transitionName="new-word" transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 0 }>
        <p key={ word }>
          { word }
        </p>
      </ReactCSSTransitionGroup>
      { /* button */ }
      <div className='btn-container'>
        <Button {...this.props}/>
      </div>
    </div>
    );
  }
} );

export default Word;
