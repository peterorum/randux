import React from 'react';

const Button = React.createClass( {

  getInitialState() {

    return {
      disabled: false
    };
  },

  render() {

    var disabled = ''; // this.state.disabled ? 'disabled' : '';

    return (
    <button className="btn-svg" disabled={ disabled } onClick={ () => this.props.updateWord() }>
      <svg>
        <use xlinkHref="#icon-random"></use>
      </svg>
    </button>
    );
  }
} );

export default Button;

