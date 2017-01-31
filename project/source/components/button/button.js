// flow weak

import React from 'react';

type Props = {
  updateWord: () => void
};

class Button extends React.Component {

  // flow definitions

  props: Props;

  state: {
    disabled: boolean;
  }

  onClick: () => void;

  // constructor

  constructor(props: Props) {
    super( props );

    this.state = {
      disabled: false
    };

  }

  // render

  render() {

    const disabled = this.state.disabled ? 'disabled' : '';

    return (
      <button className="btn-svg" disabled={ disabled } onClick={ this.onClick }>
        <svg>
          <use xlinkHref="#icon-random" />
        </svg>
      </button>
    );
  }

  // events

  onClick = () => {

    const disabledDuration = 1000;

    // disable button
    this.setState( {
      disabled: true
    } );

    // reenable
    setTimeout( () => {
      this.setState( {
        disabled: false
      } );
    }, disabledDuration );

    // update word

    return this.props.updateWord();
  }
}

export default Button;

