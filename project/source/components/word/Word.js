import React from 'react';

import Button from '../button/button';

const Word = React.createClass( {

  render() {

    const {word} = this.props;

    return (
    <div>
      <p>
        { word }
      </p>
      <div>
        <Button {...this.props}/>
      </div>
    </div>
    );
  }
} );

export default Word;
