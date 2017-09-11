// @flow

import React from 'react';

import { shallow } from 'enzyme';
import ImageModal from '../ImageModal';

test('Head renders correctly', () => {
  const component = shallow(<ImageModal username="test" img="linktoimage" />);
  expect(component).toMatchSnapshot();
});
