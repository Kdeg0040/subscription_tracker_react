import React from 'react';
import { shallow } from 'enzyme';

import InputDropdown from './InputDropdown';

describe('<InputDropdown', () => {
  const initialProps = { 
    formData: {
      company: '',
      suggestions: []
    } 
  };

  const propsWithSuggestions = { 
    formData: {
      company: '',
      suggestions: [{ name: 'test' }]
    } 
  }; 

  const inputDropdown = shallow(<InputDropdown {...initialProps} />);

  it('renders correctly', () => {
    expect(inputDropdown).toMatchSnapshot();
  });

  it('initially does not render any dropdown items', () => {
    expect(inputDropdown.find('.dropdown-item').length).toEqual(0)
  });

  it('renders suggestions', () => {
    inputDropdown.setProps(propsWithSuggestions);
    expect(inputDropdown.find('.dropdown-item').length).toEqual(1)

  });
});