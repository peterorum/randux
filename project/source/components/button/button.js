import React from 'react';

const Button = React.createClass( {

  render() {

    return (
    <button className="btn-svg" onClick={ () => this.props.updateWord() }>

      <svg>
        <use xlinkHref="#icon-random"></use>
      </svg>

    </button>
    );
  }
} );

export default Button;

