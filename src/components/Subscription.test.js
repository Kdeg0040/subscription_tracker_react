import React from 'react';
import { shallow } from 'enzyme';

import Subscription from './Subscription';

describe('<Subscription />', () => {
  const props = { sub: 1 }
  const subscription = shallow(<Subscription {...props}/>);

  it('renders correctly', () => {
    expect(subscription).toMatchSnapshot();
  });

  it('initializes subscription details in `state`', () => {
    const subscriptionDetails = { company: '' }
    expect(subscription.state()).toEqual(subscriptionDetails);
  });
});