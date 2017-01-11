import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super( props );

    this.state = {
      disabled: false
    };

  }

  static propTypes = {
    updateWord: React.PropTypes.function
  }

  render() {

    const disabled = this.state.disabled ? 'disabled' : '';

    return (
    <button className="btn-svg" disabled={ disabled } onClick={ this.onClick }>
      <svg>
        <use xlinkHref="#icon-random"></use>
      </svg>
    </button>
    );
  }

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

