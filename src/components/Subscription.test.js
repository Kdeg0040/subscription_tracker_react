import React from 'react';
import { shallow } from 'enzyme';

import Subscription from './Subscription';

const subscription = shallow(<Subscription />);

describe('<Subscription />', () => {
  it('renders correctly', () => {
    expect(subscription).toMatchSnapshot();
  });

  it('initializes subscription details in `state`', () => {
    const subscriptionDetails = {
      name: '',
      cost: '',
      frequency: '',
      startDate: '' 
    }
    expect(subscription.state()).toEqual(subscriptionDetails);
  });
});