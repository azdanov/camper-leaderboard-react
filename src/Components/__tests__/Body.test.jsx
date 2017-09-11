// @flow

import React from 'react';

import { shallow } from 'enzyme';
import Body from '../Body';

test('Head renders correctly', () => {
  const component = shallow(<Body />);
  expect(component).toMatchSnapshot();
});
