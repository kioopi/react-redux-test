import React from "react";
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import Root from '../app/cmps/root/root';


describe('root', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);
    expect(root).toExist();
  });
});
