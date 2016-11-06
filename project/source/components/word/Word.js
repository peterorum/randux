import React from 'react';

const Word = React.createClass( {

  render() {

    const {word} = this.props;

    return (
    <div>
      <p>
        { word }
      </p>
      <div>
        <button onClick={ () => this.props.updateWord() }>another</button>
      </div>
    </div>
    );
  }
} );

export default Word;
