import React from 'react';
import { shallow } from 'enzyme';

import Subscriptions from './Subscriptions';

const subscriptions = shallow(<Subscriptions />);

describe('<Subscriptions />', () => {
  it('renders correctly', () => {
    expect(subscriptions).toMatchSnapshot();
  });
});

