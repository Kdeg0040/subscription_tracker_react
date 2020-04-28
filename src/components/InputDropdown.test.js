import React from 'react';
import { shallow } from 'enzyme';

import InputDropdown from './InputDropdown';

describe('<InputDropdown', () => {
  let initialProps;
  let inputDropdown;
  let mockSelect = jest.fn();
  let mockShow = jest.fn();

  beforeEach(() => {
    initialProps = { 
      formData: {
        company: '',
        suggestions: []
      },
      select: mockSelect,
      show: mockShow 
    };

    inputDropdown = shallow(<InputDropdown {...initialProps} />);
  })

  it('renders correctly', () => {
    expect(inputDropdown).toMatchSnapshot();
  });

  it('initially does not render any dropdown items', () => {
    expect(inputDropdown.find('.dropdown-item').length).toEqual(0)
  });

  describe('when suggestions are passed in', () => {
    let propsWithSuggestions;

    beforeEach(() => {
      propsWithSuggestions = initialProps
      propsWithSuggestions.formData.suggestions.push({ name: 'test' });
      inputDropdown.setProps(propsWithSuggestions);
    });

    it('renders suggestions', () => {
      expect(inputDropdown.find('.dropdown-item').length).toEqual(1)
    });

    it('triggers `select` callback when clicked', () => {
      inputDropdown.find('.dropdown-item').simulate('click');
      expect(mockSelect).toHaveBeenCalledTimes(1);
    });
  });
});