import React from 'react';
import { shallow } from 'enzyme';

import InputDropdown from './InputDropdown';

const inputDropdown = shallow(<InputDropdown />);

describe('<InputDropdown', () => {
  it('renders correctly', () => {
    expect(inputDropdown).toMatchSnapshot();
  });
});