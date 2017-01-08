import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super( props );

    this.state = {
      disabled: false
    };

    this.onClick = this.onClick.bind(this);
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

  onClick() {

    // disable button
    this.setState( {
      disabled: true
    } );

    // reenable
    setTimeout( () => {
      this.setState( {
        disabled: false
      } );
    }, 1000 );

    // update word

    return this.props.updateWord();
  }

}

export default Button;

