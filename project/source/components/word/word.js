import React from 'react';

import Button from '../button/button';

class Word extends React.Component {

  // flow definitions

  static propTypes = {
    word: React.PropTypes.object
  // word: React.PropTypes.instanceOf(Map).isRequired
  };

  state: {
  animate: boolean;
  }

  // constructor

  constructor(props) {
    super( props );

    this.state = {
      animate: true
    };
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps !== this.props) {
      this.setState( {
        animate: true
      } );
    }
  }

  render() {

    const {word} = this.props;
    const nextWord = word.get( 'word' );

    // remove animation classes after duration
    if (this.state.animate) {
      const animateDuration = 1200;

      setTimeout( () => {
        this.setState( {
          animate: false
        } );
      }, animateDuration );
    }

    // render
    return (

    <div className='word'>
      <p key={ nextWord } className={ this.state.animate ? 'animated flip' : '' }>
        { nextWord }
      </p>
      { /* button */ }
      <div className='btn-container'>
        <Button {...this.props}/>
      </div>
    </div>
    );
  }
}

export default Word;
