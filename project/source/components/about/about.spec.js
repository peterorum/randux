import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import chai, {expect} from 'chai'
import jsxChai from 'jsx-chai'
chai.use(jsxChai);

import About from './about';

describe('About Component', function () {
  var result;

  before(()=> {
    var renderer = ReactTestUtils.createRenderer();

    const props = {
    };

    renderer.render(<About {...props} />)
    result = renderer.getRenderOutput();

    // console.log(result.props.children);
  });

  it('should return a p element',()=>{
    expect(result.type).to.equal('p');
  });

  it('should have a link to github',()=>{
    expect(result.props.children.type).to.equal('a');
    expect(result.props.children.props.href).to.match(/github/);
  });

})
