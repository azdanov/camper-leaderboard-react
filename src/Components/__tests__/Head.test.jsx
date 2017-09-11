// @flow

import React from 'react';

import { shallow } from 'enzyme';
import Head from '../Head';

test('Head renders correctly', () => {
  const component = shallow(<Head />);
  expect(component).toMatchSnapshot();
});
