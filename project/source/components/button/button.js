import React from 'react';

const Button = React.createClass( {

  render() {

    return (
    <button onClick={ () => this.props.updateWord() }>another</button>
    );
  }
} );

export default Button;
