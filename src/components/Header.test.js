import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

const header = shallow(<Header />);

describe('<Header />', () => {
  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});