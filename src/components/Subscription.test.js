import React from 'react';
import { shallow } from 'enzyme';

import Subscription from './Subscription';

describe('<Subscription />', () => {
  const props = {
    sub: { id: 1, details: { company: 'Test Company' } }
  }
  const subscription = shallow(<Subscription {...props}/>);

  it('renders correctly', () => {
    expect(subscription).toMatchSnapshot();
  });
});