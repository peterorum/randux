import React from 'react';

import Button from '../button/button';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Word extends React.Component {

  static propTypes = {
    word: React.PropTypes.object
    // word: React.PropTypes.instanceOf(Map).isRequired
  };

  render() {

    const {word} = this.props;
    const nextWord = word.get( 'word' );

    return (
    <div className='word'>
      <ReactCSSTransitionGroup transitionName={ { enter: 'animated', enterActive: 'flip', leave: 'hidden' } } transitionEnterTimeout={ 1000 } transitionLeaveTimeout={ 0 }>
        <p key={ nextWord }>
          { nextWord }
        </p>
      </ReactCSSTransitionGroup>
      { /* button */ }
      <div className='btn-container'>
        <Button {...this.props}/>
      </div>
    </div>
    );
  }
}

export default Word;
