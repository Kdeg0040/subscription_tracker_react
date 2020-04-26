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

  it('initially does not render any dropdown items', () => {
    expect(inputDropdown.find('.dropdown-item').length).toEqual(0)
  });
});