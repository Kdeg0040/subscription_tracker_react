import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

const layout = shallow(<Layout />);

describe('<Layout />', () => {
  it('renders correctly', () => {
    expect(layout).toMatchSnapshot();
  });
});