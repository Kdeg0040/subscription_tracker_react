import React from 'react';
import { shallow } from 'enzyme';

import InputDropdown from './InputDropdown';

describe('<InputDropdown', () => {
  const props = { 
    formData: {
      company: '',
      suggestions: []
    } 
  };
  const inputDropdown = shallow(<InputDropdown {...props} />);

  it('renders correctly', () => {
    expect(inputDropdown).toMatchSnapshot();
  });
});